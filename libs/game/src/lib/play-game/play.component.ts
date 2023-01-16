import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RaffleDocument, RaffleGameService, UserInGame } from '../raffe-game.service';
import { map, Observable, take } from 'rxjs';
import { WinnerModalComponent } from './winner-modal/winner-modal.component';
import { CtaGameComponent } from './cta-game/cta-game.component';

@Component({
  selector: 'app-play-game',
  standalone: true,
  template: `
    <div class="p-8 bg-white shadow dark:bg-gray-800 relative" *ngIf="gameData$ | async as game">
      <p class="mb-6 text-xl font-normal text-center text-gray-500 dark:text-gray-300">
        Join this game using the code:
      </p>

      <p
        class="text-9xl font-bold text-center mb-6 text-gray-800 dark:text-white"
        [ngClass]="{
          'text-green-500 dark:text-green-500': game[0].status === 'started',
          'text-red-500 dark:text-red-500': game[0].status === 'closed'
        }">
        {{ game[0].gameID }}
      </p>

      <app-cta-game
        (startGameEvent)="OnClickStartGame()"
        (closeGameEvent)="OnClickCloseGame()"
        [round]="game[0].actualRound"
        [status]="game[0].status"></app-cta-game>

      <p class="mb-12 text-xl font-normal text-center text-gray-500 dark:text-gray-300">
        All the users appears below...
      </p>
      <div class=" grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6" *ngIf="players$ | async as players">
        <div class="relative p-4" *ngFor="let item of players">
          <div
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-red-600 text-white p-2 opacity-80 text-center rotate-12"
            *ngIf="item.win">
            <span>Round {{ item.round }}</span> Winner!
          </div>

          <div class="flex-col flex justify-center items-center" data-itemprop="item.ticketID">
            <div class="flex-shrink-0">
              <span class="text-lg font-medium text-gray-600 dark:text-white"> {{ item.name }} </span>
              <a href="#" class="relative block">
                <img
                  alt="profil"
                  src="https://ui-avatars.com/api/?name={{ item.name }}&size=150"
                  class="mx-auto object-cover rounded-full h-20 w-20 " />
              </a>
            </div>
            <div class="mt-2 text-center flex flex-col">
              <span class="text-lg font-medium text-gray-600 dark:text-white">{{ item.ticketID }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <app-winner-modal></app-winner-modal>
  `,
  styles: [],
  imports: [CommonModule, WinnerModalComponent, CtaGameComponent],
})
export class PlayGameComponent implements OnInit {
  // game ID coming from the url
  gameID: string;
  //object coming from firebase, this contains all the Game Information <RaffleDocument>
  gameData$: Observable<RaffleDocument[]>;
  //gameCollectionID contains the doc reference on firebase of this game
  gameCollectionID: string | undefined;
  gameStatus: string;
  //list of players inside the game
  players$!: Observable<UserInGame[]>;
  //the last user that win the round
  winnerUser: UserInGame;
  //numbers of round of the raffle
  round = 0;

  constructor(private route: ActivatedRoute, private raffleGameService: RaffleGameService) {
    //set game id from router
    this.gameID = this.route.snapshot.paramMap.get('gameID') || '';
    //set gameData$ from service
    this.gameData$ = raffleGameService.getGameByID(this.gameID);
  }

  ngOnInit() {
    //get players for the game
    this.getPlayers();
  }

  updateGame(game: RaffleDocument) {
    this.gameCollectionID = game.collectionID;
    this.gameStatus = game.status;
    this.round = game.actualRound;
  }

  getPlayers() {
    this.gameData$.pipe(take(1)).subscribe(game => {
      this.updateGame(game[0]);
      if (this.gameCollectionID) {
        this.raffleGameService.GetUsersByGameID(this.gameCollectionID).then(res => {
          this.players$ = res;
        });
      }
    });
  }

  OnClickStartGame() {
    //update game status from waiting to started
    //define the winner with a specific order
    //increase the round game
    this.round++;

    //TODO: filter for non winner users to avoid double win
    this.players$
      .pipe(take(1))
      .pipe(map((players: UserInGame[]) => players.filter((player: UserInGame) => player.win !== true)))
      .subscribe(data => {
        //select randomly the winner user
        this.winnerUser = data[Math.floor(Math.random() * data.length)];
        //update the game data
        this.winnerUser.round = this.round;
        this.winnerUser.win = true;
        //store to firebase
        this.updateWinnerTicket(this.winnerUser);
      });
  }

  updateWinnerTicket(ticket: UserInGame) {
    if (this.gameCollectionID) this.raffleGameService.updateUserTicket(this.gameCollectionID, ticket, this.round);
  }

  OnClickCloseGame() {
    //update the firebase game with winner and change status to closed
    if (this.gameCollectionID) this.raffleGameService.closeRaffleGame(this.gameCollectionID);
  }
}
