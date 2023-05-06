import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { isObservable, Observable, Subscription, take } from 'rxjs';
import { WinnerModalComponent } from './winner-modal/winner-modal.component';
import { CtaGameComponent } from './cta-game/cta-game.component';
import { AdminService, ModalService, RaffleDocument, RaffleGameService, UserInGame } from '@game';
import { QRCodeModule } from 'angularx-qrcode';
import { ConfettiService } from '../../services/confetti.service';

@Component({
  selector: 'app-play-game',
  standalone: true,
  template: `
    <div class="p-8 bg-white shadow dark:bg-gray-800 relative" *ngIf="gameData$ | async as gameDetails">
      <p class="mb-6 text-xl font-normal text-center text-gray-500 dark:text-gray-300">Join the game using the code:</p>

      <p
        class="text-8xl font-bold text-center mb-6 text-gray-800 dark:text-white"
        [ngClass]="{
          'text-green-500 dark:text-green-500': gameDetails[0].status === 'started',
          'text-red-500 dark:text-red-500': gameDetails[0].status === 'closed'
        }">
        {{ gameDetails[0].gameID }}
      </p>

      <div class="flex justify-center mb-8">
        <qrcode
          [qrdata]="gameQRUrl"
          [imageHeight]="60"
          [imageWidth]="60"
          [width]="256"
          [errorCorrectionLevel]="'M'"></qrcode>
      </div>

      <div class="flex justify-center mb-8">
        <span
          *ngIf="gameDetails[0].status === 'started'"
          class="inline-flex items-center bg-green-600 rounded-full px-2 text-sm text-white py-1 font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="fill-current mr-1.5 text-white"
            viewBox="0 0 16 16"
            width="16"
            height="16">
            <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
            <path
              fill-rule="evenodd"
              d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"></path>
          </svg>
          Started
        </span>

        <span
          *ngIf="gameDetails[0].status === 'closed'"
          class="inline-flex items-center bg-red-600 rounded-full px-2 text-sm text-white py-1 font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="fill-current mr-1.5 text-white"
            viewBox="0 0 16 16"
            width="16"
            height="16">
            <path
              d="M11.28 6.78a.75.75 0 00-1.06-1.06L7.25 8.69 5.78 7.22a.75.75 0 00-1.06 1.06l2 2a.75.75 0 001.06 0l3.5-3.5z"></path>
            <path
              fill-rule="evenodd"
              d="M16 8A8 8 0 110 8a8 8 0 0116 0zm-1.5 0a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"></path>
          </svg>
          Closed
        </span>

        <span
          *ngIf="gameDetails[0].status === 'ready'"
          class="inline-flex items-center bg-gray-500 rounded-full px-2 text-sm text-white py-1 font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="fill-current mr-1.5 text-white"
            viewBox="0 0 16 16"
            width="16"
            height="16">
            <path
              fill-rule="evenodd"
              d="M6.749.097a8.054 8.054 0 012.502 0 .75.75 0 11-.233 1.482 6.554 6.554 0 00-2.036 0A.75.75 0 016.749.097zM4.345 1.693A.75.75 0 014.18 2.74a6.542 6.542 0 00-1.44 1.44.75.75 0 01-1.212-.883 8.042 8.042 0 011.769-1.77.75.75 0 011.048.166zm7.31 0a.75.75 0 011.048-.165 8.04 8.04 0 011.77 1.769.75.75 0 11-1.214.883 6.542 6.542 0 00-1.439-1.44.75.75 0 01-.165-1.047zM.955 6.125a.75.75 0 01.624.857 6.554 6.554 0 000 2.036.75.75 0 01-1.482.233 8.054 8.054 0 010-2.502.75.75 0 01.858-.624zm14.09 0a.75.75 0 01.858.624 8.057 8.057 0 010 2.502.75.75 0 01-1.482-.233 6.55 6.55 0 000-2.036.75.75 0 01.624-.857zm-13.352 5.53a.75.75 0 011.048.165 6.542 6.542 0 001.439 1.44.75.75 0 01-.883 1.212 8.04 8.04 0 01-1.77-1.769.75.75 0 01.166-1.048zm12.614 0a.75.75 0 01.165 1.048 8.038 8.038 0 01-1.769 1.77.75.75 0 11-.883-1.214 6.543 6.543 0 001.44-1.439.75.75 0 011.047-.165zm-8.182 3.39a.75.75 0 01.857-.624 6.55 6.55 0 002.036 0 .75.75 0 01.233 1.482 8.057 8.057 0 01-2.502 0 .75.75 0 01-.624-.858z"></path>
          </svg>
          Draft
        </span>
      </div>

      <app-cta-game
        (startGameEvent)="OnClickStartGame()"
        (closeGameEvent)="OnClickCloseGame()"
        [round]="gameDetails[0].actualRound"
        [status]="gameDetails[0].status" />

      <p class="mb-12 text-xl font-normal text-center text-gray-500 dark:text-gray-300">
        All users will appear below...
      </p>
      <div
        class=" grid grid-cols-2 gap-5 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-8"
        *ngIf="players$ | async as players">
        <div
          class="relative p-4"
          *ngFor="let item of players; let first = first"
          [ngClass]="{ 'new-box': first && gameDetails[0].status === 'ready' }">
          <div
            class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-green-600 text-white p-2 opacity-80 text-center rotate-12"
            *ngIf="item.win">
            <span>Winner! Round {{ item.round }}</span>
          </div>
          <div class="flex-col flex justify-center items-center" data-itemprop="item.ticketID">
            <div class="flex-shrink-0">
              <a href="#" class="relative block">
                <img
                  alt="profil"
                  src="https://ui-avatars.com/api/?name={{ item.name }}&size=150&background={{ item.ticketID }}"
                  class="mx-auto object-cover rounded-full h-20 w-20 " />
              </a>
            </div>
            <div class="mt-2 text-center flex flex-col">
              <span class="text-lg font-medium text-gray-600 dark:text-white"> {{ item.name }} </span>
              <span class="rounded-full text-white px-3 py-1 text-xs uppercase font-medium bg-slate-400">{{
                item.ticketID
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div #modal></div>
  `,
  styles: [
    `
      @keyframes append-animate {
        from {
          transform: scale(0);
          opacity: 0;
        }
        to {
          transform: scale(1);
          opacity: 1;
        }
      }
      .new-box {
        animation: append-animate 0.3s linear;
      }
    `,
  ],
  imports: [CommonModule, WinnerModalComponent, CtaGameComponent, QRCodeModule],
  providers: [ModalService, ConfettiService],
})
export class PlayGameComponent implements OnInit {
  // game ID coming from the url
  gameID: string | null;
  //qr url
  gameQRUrl: string = 'https://estrai.me/game/join?game=';
  //collectionID
  collectionID: string | undefined;
  //object coming from firebase, this contains all the Game Information <RaffleDocument>
  gameData$: Observable<RaffleDocument[]>;
  //gameCollectionID contains the doc reference on firebase of this game
  gameStatus: string;
  //list of players inside the game
  players$!: Observable<UserInGame[]>;
  //the last user that win the round
  winnerUser: UserInGame;
  //numbers of round of the raffle
  round = 0;

  @ViewChild('modal', { read: ViewContainerRef })
  entry!: ViewContainerRef;
  sub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private raffleGameService: RaffleGameService,
    private adminService: AdminService,
    private modalService: ModalService,
    private confettiService: ConfettiService
  ) {
    //set game id from router
    const gameID = this.route.snapshot.paramMap.get('gameID');

    if (gameID) {
      this.gameID = gameID;
      //set gameData$ from service
      this.gameQRUrl += this.gameID;
      this.gameData$ = raffleGameService.getAdminGameByID(this.gameID);
    } else {
      router.navigate(['/']);
    }
  }

  ngOnInit() {
    //get players for the game
    this.gameData$.pipe(take(1)).subscribe(game => {
      if (!game[0]) {
        this.router.navigate(['/unauthorized']);
      }
      console.log(game[0]);
      this.collectionID = game[0].collectionID;
      this.getPlayers();
    });
  }

  updateGame(game: RaffleDocument) {
    this.gameStatus = game.status;
    this.round = game.actualRound;
  }

  getPlayers() {
    if (this.gameID) {
      this.players$ = this.raffleGameService.GetUsersByGameID(this.gameID);
    }
  }

  OnClickStartGame() {
    if ((isObservable(this.players$), this.collectionID)) {
      //increase the round game
      this.round++;
      //define the winner with a specific order

      this.adminService.defineNewWinner(this.players$, this.round).then(result => {
        if (result && this.collectionID && this.gameID) {
          this.createModal(result as UserInGame);
          this.confettiService.fireworks();
          this.raffleGameService.updateUserTicket(this.collectionID, result as UserInGame, this.round, this.gameID);
        } else {
          throw new Error('Something went wrong...');
        }
      });
    }
  }

  OnClickCloseGame() {
    //update the firebase game with winner and change status to closed
    if (this.gameID && this.collectionID) {
      this.raffleGameService.closeRaffleGame(this.gameID, this.collectionID);
    }
  }

  getDate(time: Date) {
    console.log(time);
  }

  createModal(user: UserInGame) {
    this.sub = this.modalService.openModal(this.entry, user).subscribe(v => {
      //your logic
    });
  }
}
