import { Injectable } from '@angular/core';
import {
  addDoc,
  collectionData,
  Firestore,
  query,
  collection,
  doc,
  orderBy,
  getDoc,
  updateDoc,
  Timestamp,
  setDoc,
  DocumentSnapshot,
  collectionChanges,
  collectionSnapshots,
} from '@angular/fire/firestore';
import { Router } from '@angular/router';

import { AuthService } from '@auth';
import { onSnapshot, where } from '@firebase/firestore';
import { from, Observable, switchMap, take } from 'rxjs';

export interface UserInGame {
  collectionID?: string;
  joinDate: Timestamp | Date;
  name: string;
  ticketID: string;
  win?: boolean;
  round?: number;
}
export interface RaffleDocument {
  collectionID?: string;
  creationDate: Timestamp | Date;
  gameID: string;
  status: 'ready' | 'started' | 'closed';
  email: string;
  users?: UserInGame[];
  actualRound: number;
}

@Injectable({
  providedIn: 'root',
})
export class RaffleGameService {
  private _userEmail = '';
  private _userUID: string | undefined;

  constructor(private firestore: Firestore, private authService: AuthService, private router: Router) {
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
        actualRound: 0,
      };
      console.log('createNewRaffle: path:', `admin/${this._userUID}/games`)
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
   * @param gameID
   */
  async AddNewUserToGame(gameID: number | undefined) {
    if (gameID) {
      const ticketNumber = this.getNewTicketID(6);
      const userTicketName = this.authService.userData?.displayName || '';
      const raffleCollection = collection(this.firestore, `players/${gameID}/users`);
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
   * @param collectionID
   * @param ticket
   * @param round
   */
  async updateUserTicket(collectionID: number, ticket: UserInGame, round: number) {
    const raffleCollection = doc(this.firestore, `admin/${this._userUID}/games/${collectionID}`);
    const collectionData = {
      actualRound: round,
      status: 'started',
    };
    await updateDoc(raffleCollection, collectionData).then(() => {
      const userCollection = doc(this.firestore, `players/${collectionID}/users/${ticket.collectionID}`);
      const userCollectionData = {
        win: ticket.win,
        round: ticket.round,
      };
      updateDoc(userCollection, userCollectionData);
    });
  }

  /**
   * Update the game when it wil be closed
   *
   * @param collectionID
   */
  async closeRaffleGame(collectionID: number) {
    const raffleCollection = doc(this.firestore, `games/${collectionID}`);
    const collectionData = {
      status: 'closed',
    };
    updateDoc(raffleCollection, collectionData);
  }

  /**
   * Used for admin page to show all the users that joined a game
   *
   * @param gameID
   * @param ticketID
   * @returns
   */
  GetUsersByGameID(gameID: number) {
    const gameRef = collection(this.firestore, `players/${gameID}/users`);
    let q = query(gameRef, orderBy('joinDate', 'desc'));
    return from(collectionData(q, { idField: 'collectionID' })) as Observable<UserInGame[]>;
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
  getAdminGameByID(gameID: number) {
    return this.authService.getUserData().pipe(
      switchMap(user => {
        this._userEmail = user?.email || '';
        this._userUID = user?.uid;
        console.log('getAdminGameByID: path: ', `admin/${user?.uid}/games/${gameID}`)
        const gameRef = collection(this.firestore, `admin/${user?.uid}/games`);
        const docRef = query(gameRef, where('gameID', '==', `${gameID}`),  orderBy('creationDate', 'desc'));
        return from(collectionData(docRef)) as unknown as Observable<RaffleDocument[]>;
      })
    );
  }

  getGameByID(gameID: number) {
    if (gameID && gameID.toString().length === 6) {
      const gameRef = collection(this.firestore, 'players');
      const docRef = query(gameRef, where('gameID','==',`${gameID}`));
      return from(collectionData(docRef)) as unknown as Observable<RaffleDocument[]>;
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
