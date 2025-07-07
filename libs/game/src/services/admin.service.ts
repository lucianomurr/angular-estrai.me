import { Injectable, inject } from '@angular/core';
import {
  collection,
  collectionData,
  Firestore,
  query,
  where,
} from '@angular/fire/firestore';
import { AuthService } from '@data-access';
import { from, map, Observable } from 'rxjs';
import { UserInGame } from '../interface/player-user.interface';
import { RaffleDocument } from '../interface/game.interface';

@Injectable({
  providedIn: 'root',
})
export default class AdminService {
  private firestore = inject(Firestore);
  private authService = inject(AuthService);

  getGameCollectionID(gameID: string) {
    console.log('getGameCollectionID: gameID:', gameID);
    const gameRef = collection(this.firestore, `players/`);
    const q = query(gameRef, where('gameID', '==', `${gameID}`));
    return from(collectionData(q, { idField: 'collectionID' })) as Observable<
      RaffleDocument[]
    >;
  }

  defineNewWinner(players$: Observable<UserInGame[]>, round: number) {
    return new Promise((resolve) => {
      players$
        .pipe(
          map((players: UserInGame[]) =>
            players.filter((player: UserInGame) => player.win !== true),
          ),
        )
        .subscribe((data) => {
          if (data.length > 0) {
            //select randomly the winner user
            const winner = data[
              Math.floor(Math.random() * data.length)
            ] as UserInGame;
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
