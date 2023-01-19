import { Time } from '@angular/common';
import { ErrorHandler, Injectable } from '@angular/core';
import { addDoc, collectionData, Firestore, query, where, collection, doc, orderBy, getDoc, updateDoc, Timestamp, serverTimestamp } from '@angular/fire/firestore';

import { Router } from '@angular/router';

import { AuthService } from '@auth';
import { from, Observable } from 'rxjs';

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
  constructor(private firestore: Firestore, private authService: AuthService, private router: Router) {}

  getUserEmail() {
    return this.authService.userData?.email || '';
  }
  /**
   * create new raffle should add two different record to the firebase db
   * 1: new collection record for games
   */
  createNewRaffle() {
    const userEmail = this.getUserEmail();
    const _newGameID = this.getNewGameID(5);
    if (userEmail) {
      const gameRef = collection(this.firestore, 'games');

      const collectionData: RaffleDocument = {
        creationDate: new Date(),
        gameID: _newGameID,
        status: 'ready',
        email: userEmail,
        actualRound: 0,
      };
      addDoc(gameRef, collectionData).then(() => {
        //this will redirect host to the new game created
        this.router.navigate([`game/manage/${_newGameID}`]);
      });
    } else {
      throw new Error('Email is empty, no raffle could be created.');
    }
  }

  async AddNewUserToGame(gameID: string | undefined) {
    if (gameID) {
      const ticketNumber = this.getNewGameID(5);
      const userTicketName = this.authService.userData?.displayName || '';
      const raffleCollection = collection(this.firestore, `games/${gameID}/users`);
      const collectionData: UserInGame = {
        joinDate: new Date(),
        name: userTicketName,
        ticketID: ticketNumber,
      };
      await addDoc(raffleCollection, collectionData).then((res) => {
        console.log(res.path);
        if (!userTicketName) {
          this.router.navigate([`game/assign/${ticketNumber}`]);
        } else {
          const gameDocID = this.getDocID(res.path);
          const ticketDocID = this.getTicketID(res.path);
          this.router.navigate([`game/waiting/${gameDocID}/ticket/${ticketNumber}`]);
        }
      });
    } else {
      throw new Error('Incorrect game id or ticket number .');
    }
  }




  async updateUserTicket(collectionID: string, ticket: UserInGame, round: number) {
    const raffleCollection = doc(this.firestore, `games/${collectionID}`);
    const collectionData = {
      actualRound: round,
      status: 'started',
    };
    await updateDoc(raffleCollection, collectionData).then(() => {
      const userCollection = doc(this.firestore, `games/${collectionID}/users/${ticket.collectionID}`);
      const userCollectionData = {
        win: ticket.win,
        round: ticket.round,
      };
      updateDoc(userCollection, userCollectionData);
    });
  }

  async closeRaffleGame(collectionID: string) {
    const raffleCollection = doc(this.firestore, `games/${collectionID}`);
    const collectionData = {
      status: 'closed',
    };
    updateDoc(raffleCollection, collectionData);
  }

  async GetUsersByGameID(gameID: string | undefined, ticketID: string | undefined = undefined) {
    const gameRef = collection(this.firestore, `games/${gameID}/users`);
    let q = query(gameRef, orderBy('joinDate', 'desc'));
    if (ticketID){
      q = query(gameRef, where('ticketID','==', ticketID));
    }
    return from(collectionData(q, { idField: 'collectionID' })) as Observable<UserInGame[]>;
  }

  async getUserTicketDetail(gameDocID:string, ticketID:string){

    return await this.GetUsersByGameID(gameDocID,ticketID);

  }

  getGameByID(filter = '') {
    const gameRef = collection(this.firestore, 'games');
    let q = query(gameRef);
    if (filter) {
      q = query(gameRef, where('gameID', '==', filter));
    }
    return collectionData(q, { idField: 'collectionID' }) as unknown as Observable<RaffleDocument[]>;
  }

  /**
   * This function return a random string with fixed length
   * @param size
   * @returns
   */
  getNewGameID(size: number) {
    const result = [];
    const hexRef = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

    for (let n = 0; n < size; n++) {
      result.push(hexRef[Math.floor(Math.random() * 16)]);
    }
    return result.join('');
  }

  getDocID(path:string){
    return path.split('/')[1];
  }
  getTicketID(path:string){
    return path.split('/')[3];
  }
}
