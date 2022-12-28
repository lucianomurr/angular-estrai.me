import { Time } from '@angular/common';
import { Injectable } from '@angular/core';
import {
  addDoc,
  collectionData,
  deleteDoc,
  doc,
  Firestore,
  getDoc,
  query,
  updateDoc,
  where,
} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { collection, getDocs, Timestamp } from '@firebase/firestore';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Player } from '../model/player.interface';
import { AuthService } from './auth.service';


export interface RaffleCollection {
  creationDate: Date,
  gameID: string
}

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  private playerSource = new BehaviorSubject<any | null>(null);
  players$ = this.playerSource.asObservable();

  constructor(private firestore: Firestore, private authService:AuthService, private router:Router) {}

  createNewRaffle() {
    console.log(this.authService.userData?.email);
    const userCollection = this.authService.userData?.email;
    const _newGameID = this.getNewGameID();
    if (userCollection){
      const playersRef = collection(this.firestore, userCollection);
      const collectionData: RaffleCollection = {
        creationDate: new Date(),
        gameID: _newGameID
      }
      addDoc(playersRef, collectionData).then( (res) => {
        //this will redirect host to the new game created
        this.router.navigate([`/game/${_newGameID}`]);
      });
    } else {
      throw new Error('Email is empty, no raffle could be created.')
    }
  }

  getPlayers(filter = '') {
    const playersRef = collection(this.firestore, 'players');
    let q = query(playersRef);
    if (filter) {
      q = query(playersRef, where('name', '==', filter));
    }
    return collectionData(q) as unknown as Observable<Player[]>;
  }



  getNewGameID(size:number=6) {
    let result = [];
    let hexRef = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

    for (let n = 0; n < size; n++) {
      result.push(hexRef[Math.floor(Math.random() * 16)]);
    }
    return result.join('');
  }

}
