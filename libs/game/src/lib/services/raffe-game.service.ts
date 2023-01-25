import { Injectable } from '@angular/core';
import {
  addDoc,
  collectionData,
  Firestore,
  query,
  collection,
  doc,
  orderBy,
  updateDoc,
  setDoc,
  where,
} from '@angular/fire/firestore';
import { Router } from '@angular/router';

import { AuthService } from '@auth';
import { from, Observable, switchMap, take } from 'rxjs';
import { AdminService, RaffleDocument, UserInGame } from '@game';

@Injectable({
  providedIn: 'root',
})
export class RaffleGameService {
  private _userEmail = '';
  private _userUID: string | undefined;

  constructor(
    private firestore: Firestore,
    private authService: AuthService,
    private router: Router,
    private adminService: AdminService
  ) {
    this.authService.getUserData();
  }

  getUserEmail() {
    return this.authService.userData?.email || '';
  }
  getUserUID() {
    return this.authService.userData?.uid || '';
  }

  /**
   * @description create new raffle should add two different record to the firebase db
   * 1: new collection record for admin games (private)
   * 2: new collection record for players (public)
   *
   * This method require an authenticated user
   */
  createNewRaffle() {
    this._userEmail = this.getUserEmail();
    this._userUID = this.authService.userData?.uid;
    const _newGameID = this.getNewGameID(6);

    if (this._userEmail && this._userUID) {
      const collectionData: RaffleDocument = {
        creationDate: new Date(),
        gameID: _newGameID,
        status: 'ready',
        email: this._userEmail,
        userUID: this._userUID,
        actualRound: 0,
      };
      console.log('createNewRaffle: path:', `admin/${this._userUID}/games`);
      const gameRef = collection(this.firestore, `admin/${this._userUID}/games`);
      const docReference = doc(gameRef);
      const adminGame$ = setDoc(docReference, collectionData);

      const playersGameRef = collection(this.firestore, `players`);
      const playerDocReference = doc(playersGameRef);
      const playerGame$ = setDoc(playerDocReference, collectionData);

      Promise.all([adminGame$, playerGame$]).then(() => {
        this.router.navigate([`game/manage/${_newGameID}`]);
      });
    } else {
      throw new Error('Email is empty, no raffle could be created.');
    }
  }

  /**
   * @description Used to create a new ticket for the user
   * Ticket will be generated using a string
   *
   * @param collectionID
   */
  async AddNewUserToGame(collectionID: string) {
    if (collectionID) {
      const ticketNumber = this.getNewTicketID(6);
      const userTicketName = this.authService.userData?.displayName || '';
      const raffleCollection = collection(this.firestore, `players/${collectionID}/users`);
      const collectionData: UserInGame = {
        joinDate: new Date(),
        name: userTicketName,
        ticketID: ticketNumber,
      };
      await addDoc(raffleCollection, collectionData).then(res => {
        console.log(res.path);
        if (!userTicketName) {
          this.router.navigate([`game/assign/${ticketNumber}`]);
        } else {
          const gameDocID = this.getDocID(res.path);

          this.router.navigate([`game/waiting/${gameDocID}/ticket/${ticketNumber}`]);
        }
      });
    } else {
      throw new Error('Incorrect game id or ticket number .');
    }
  }

  /**
   * @description Used to update game and ticket to set a winner
   *
   * @param collectionID gameCollectionID
   * @param ticket
   * @param round
   */
  updateUserTicket(collectionID: string, ticket: UserInGame, round: number, gameID: string) {
    //update admin game
    const raffleCollection = doc(this.firestore, `admin/${this._userUID}/games/${collectionID}`);
    const gameCollectionData = {
      actualRound: round,
      status: 'started',
    };
    let promises = [updateDoc(raffleCollection, gameCollectionData)];

    this.adminService
      .getGameCollectionID(gameID)
      .pipe(take(1))
      .subscribe(game => {
        console.log('updateUserTicket: path', `players/${game[0].collectionID}/users/${ticket.collectionID}`);

        const userCollection = doc(this.firestore, `players/${game[0].collectionID}/users/${ticket.collectionID}`);
        const userCollectionData = {
          win: ticket.win,
          round: ticket.round,
        };

        promises.push(updateDoc(userCollection, userCollectionData));
        const userGameCollection = doc(this.firestore, `players/${game[0].collectionID}`);

        promises.push(updateDoc(userGameCollection, gameCollectionData));

        return Promise.all(promises);
      });
  }

  /**
   * Update the game when it wil be closed
   *
   * @param gameID
   */
  closeRaffleGame(gameID: string, collectionID: string) {

    const raffleCollection = doc(this.firestore, `admin/${this._userUID}/games/${collectionID}`);
    const collectionData = {
      status: 'closed',
    };
    let promises = [updateDoc(raffleCollection, collectionData)];

    this.adminService
      .getGameCollectionID(gameID)
      .pipe(take(1))
      .subscribe(game => {
        const raffleCollection = doc(this.firestore, `players/${game[0].collectionID}`);
        const collectionData = {
          status: 'closed',
        };
        promises.push(updateDoc(raffleCollection, collectionData));
      });

    return Promise.all(promises);
  }

  /**
   * Used for admin page to show all the users that joined a game
   *
   * @param gameID
   * @param ticketID
   * @returns
   */
  GetUsersByGameID(gameID: string) {
    //get players firebase id
    return this.adminService.getGameCollectionID(gameID).pipe(
      switchMap(game => {
        const gameRef = collection(this.firestore, `players/${game[0].collectionID}/users`);
        let q = query(gameRef, orderBy('joinDate', 'desc'));
        const observable$ = from(collectionData(q, { idField: 'collectionID' })) as Observable<UserInGame[]>;

        observable$.subscribe(users => {
          console.log('GetUsersByGameID', users);
        });

        return observable$;
      })
    );
  }

  /**
   * Use by players page to get ticket details
   * @param gameDocID
   * @param ticketID
   * @returns
   */
  getUserTicketDetail(gameDocID: string, ticketID: string) {
    if (gameDocID && ticketID) {
      console.log('query: ', `players/${gameDocID}/users/${ticketID}`);
      const gameRef = collection(this.firestore, `players/${gameDocID}/users`);
      const queryDocs = query(gameRef, where('ticketID', '==', ticketID));
      return from(collectionData(queryDocs, { idField: 'collectionID' })) as Observable<UserInGame[]>;
    } else {
      throw new Error('Insert a ticket number');
    }
  }

  /**
   * Used by admin page to collect game data and Firebase ID
   * @param gameID
   * @returns
   */
  getAdminGameByID(gameID: string) {
    return this.authService.getUserData().pipe(
      switchMap(user => {
        this._userEmail = user?.email || '';
        this._userUID = user?.uid;
        console.log('getAdminGameByID: path: ', `admin/${user?.uid}/games/${gameID}`);
        const gameRef = collection(this.firestore, `admin/${user?.uid}/games`);
        const docRef = query(gameRef, where('gameID', '==', `${gameID}`), orderBy('creationDate', 'desc'));
        return from(collectionData(docRef, { idField: 'collectionID' })) as unknown as Observable<RaffleDocument[]>;
      })
    );
  }

  getGameByID(gameID: number) {
    if (gameID && gameID.toString().length === 6) {
      const gameRef = collection(this.firestore, 'players');
      const docRef = query(gameRef, where('gameID', '==', `${gameID}`));
      return from(collectionData(docRef, { idField: 'collectionID' })) as unknown as Observable<RaffleDocument[]>;
    } else {
      throw new Error('Insert a valid gameID');
    }
  }

  /**
   * @description This function return a random string with fixed length
   *
   * @param size
   * @returns
   */
  getNewTicketID(size: number) {
    const result = [];
    const hexRef = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

    for (let n = 0; n < size; n++) {
      result.push(hexRef[Math.floor(Math.random() * 16)]);
    }
    return result.join('');
  }

  /**
   * @description This function return a random string with fixed length
   * @param size
   * @returns
   */
  getNewGameID(size: number) {
    const result = [];
    const hexRef = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    for (let n = 0; n < size; n++) {
      result.push(hexRef[Math.floor(Math.random() * 10)]);
    }
    return result.join('');
  }

  getDocID(path: string) {
    return path.split('/')[1];
  }
  getTicketID(path: string) {
    return path.split('/')[3];
  }
}
