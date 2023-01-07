import { Injectable } from '@angular/core';
import { addDoc, collectionData, Firestore, query, where, collection, doc } from '@angular/fire/firestore';

import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

export interface UserInGame {
  joinDate: Date;
  name: string;
  ticketID: string;
}
export interface RaffleDocument {
  collectionID?: string;
  creationDate: Date;
  gameID: string;
  status: 'ready' | 'started' | 'closed';
  email: string;
  users?: UserInGame[];
}

@Injectable({
  providedIn: 'root',
})
export class RaffleGameService {
  constructor(private firestore: Firestore, private authService: AuthService, private router: Router) {}

  /**
   * create new raffle should add two different record to the firebase db
   * 1: new collection record for games
   */
  createNewRaffle() {
    const userEmail = this.authService.userData?.email;
    const _newGameID = this.getNewGameID(7);
    if (userEmail) {
      const gameRef = collection(this.firestore, 'games');
      const collectionData: RaffleDocument = {
        creationDate: new Date(),
        gameID: _newGameID,
        status: 'ready',
        email: userEmail,
      };
      addDoc(gameRef, collectionData).then(() => {
        //this will redirect host to the new game created
        this.router.navigate([`game/manage/${_newGameID}`]);
      });
    } else {
      throw new Error('Email is empty, no raffle could be created.');
    }
  }

  async AddNewUserToGame(gameID: string | undefined, ticketNumber: string) {
    if (gameID && ticketNumber) {
      const userTicketName = this.authService.userData?.displayName || '';
      const raffleCollection = collection(this.firestore, `games/${gameID}/users`);
      const collectionData: UserInGame = {
        joinDate: new Date(),
        name: userTicketName,
        ticketID: ticketNumber,
      };
      await addDoc(raffleCollection, collectionData).then(() => {
        if (!userTicketName) {
          this.router.navigate([`game/assign/${ticketNumber}`]);
        } else {
          this.router.navigate([`game/waiting/${ticketNumber}`]);
        }
      });
    } else {
      throw new Error('Incorrect game id or ticket number .');
    }
  }

  async GetUsersByGameID(gameID: string | undefined) {
    const gameRef = collection(this.firestore, `games/${gameID}/users`);
    const q = query(gameRef);
    return collectionData(q) as unknown as Observable<UserInGame[]>;
  }

  getGameByID(filter = '') {
    const gameRef = collection(this.firestore, 'games');
    let q = query(gameRef);
    if (filter) {
      q = query(gameRef, where('gameID', '==', filter));
    }

    return collectionData(q, { idField: 'collectionID' }) as unknown as Observable<RaffleDocument[]>;
  }

  getNewGameID(size: number) {
    const result = [];
    const hexRef = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

    for (let n = 0; n < size; n++) {
      result.push(hexRef[Math.floor(Math.random() * 16)]);
    }
    return result.join('');
  }
}
