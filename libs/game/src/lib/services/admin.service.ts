import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore, query, where } from '@angular/fire/firestore';
import { AuthService } from '@auth';
import { RaffleDocument, UserInGame } from '@game';
import { from, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private firestore: Firestore, private authService: AuthService) { }

  getGameCollectionID(gameID: string){
    console.log('getGameCollectionID: gameID:', gameID);
    const gameRef = collection(this.firestore, `players/`);
    let q = query(gameRef, where('gameID','==',`${gameID}`));
    return from(collectionData(q, { idField: 'collectionID' })) as Observable<RaffleDocument[]>;
  }

  defineNewWinner(players$: Observable<UserInGame[]>, round:number){

    return new Promise(resolve => {

      players$
      .pipe(map((players: UserInGame[]) => players.filter((player: UserInGame) => player.win !== true)))
      .subscribe(data => {

        if(data.length>0){

          //select randomly the winner user
          const winner = data[Math.floor(Math.random() * data.length)] as UserInGame;
          //update the game data
          winner.round = round;
          winner.win = true;
          //store to firebase
          resolve(winner);

        } else {
          resolve(false);
        }
      });
    });


  }


}
