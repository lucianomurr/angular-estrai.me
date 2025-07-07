import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { NgIcon, provideIcons } from '@ng-icons/core';

import {
  isObservable,
  map,
  Observable,
  Subscription,
  take,
  switchMap,
  EMPTY,
} from 'rxjs';

import { matArrowBack } from '@ng-icons/material-icons/baseline';

import { GameInfoComponent } from '../../play-game/game-info.component';
import { GameParticipantListComponent } from '../../play-game/participant.component';

import { ConfettiService } from '../../services/confetti.service';
import RaffleGameService from '../../services/raffe-game.service';
import AdminService from '../../services/admin.service';
import { RaffleDocument } from 'libs/game/src/interface/game.interface';

import { CtaGameComponent } from '../../play-game/cta-game.component';
import ModalService from '../../services/modal.service';
import { UserInGame } from '../../interface/player-user.interface';

@Component({
  selector: 'app-play-game',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CtaGameComponent,
    GameInfoComponent,
    GameParticipantListComponent,
    NgIcon,
  ],
  providers: [ModalService, ConfettiService, provideIcons({ matArrowBack })],
  template: `
    <div class="min-h-screen bg-gray-50">
      <header class="bg-white shadow-sm">
        <div class="container mx-auto py-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-4">
              <a
                [routerLink]="'/game'"
                class="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ng-icon name="matArrowBack" size="24"></ng-icon>
                <span>Back to dashboard</span>
              </a>
              <div class="h-6 w-px bg-gray-300"></div>
              <div class="flex items-center gap-2">
                <h1 class="text-3xl font-bold gradient-text">ESTRAI.ME</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main class="container mx-auto px-4 py-8">
        @if (gameData$ | async; as gameDetails) {
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div class="lg:col-span-1 space-y-6">
              <app-game-info
                [gameID]="gameDetails[0].gameID"
                [gameStatus]="gameDetails[0].status"
                (gameNameChange)="onChangeGameName($event)"
                [gameName]="gameDetails[0].gameName"
                class="lg:col-span-1"
              />
              <app-cta-game
                class="lg:col-span-1"
                (startGameEvent)="OnClickStartGame()"
                (closeGameEvent)="OnClickCloseGame()"
                [round]="gameDetails[0].actualRound"
                [status]="gameDetails[0].status"
                [participants$]="players$"
              />
            </div>
            <div class="col-span-2">
              <app-participant-list
                [participants]="players$ | async"
                [gameStatus]="gameDetails[0].status"
              />
            </div>
          </div>
        }
      </main>
      <div #modal></div>
    </div>
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
})
export default class PlayGameComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);

  readonly gameID$ = this.route.paramMap.pipe(
    map((params) => params.get('gameID')),
  );

  private router = inject(Router);
  private raffleGameService = inject(RaffleGameService);
  private adminService = inject(AdminService);
  private modalService = inject(ModalService);
  private confettiService = inject(ConfettiService);

  //qr url
  gameQRUrl = 'https://estrai.me/game/join?game=';
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
  //gameID
  gameID: string | null = null;

  @ViewChild('modal', { read: ViewContainerRef })
  entry!: ViewContainerRef;
  sub!: Subscription;

  constructor() {
    const router = this.router;
    const raffleGameService = this.raffleGameService;
  }

  ngOnInit() {
    this.gameID$
      .pipe(
        take(1),
        switchMap((gameID) => {
          if (!gameID) {
            this.router.navigate(['/']);
            return EMPTY;
          }
          this.gameID = gameID;
          this.gameQRUrl += gameID;
          this.gameData$ = this.raffleGameService.getAdminGameByID(gameID);
          return this.gameData$.pipe(take(1));
        }),
      )
      .subscribe((game) => {
        if (!game[0]) {
          this.router.navigate(['/unauthorized']);
          return;
        }
        console.log('PlayComponent ngOnInit: game:', game[0]);
        this.collectionID = game[0].collectionID;
        this.getPlayers();
        this.updateGame(game[0]);
      });
  }

  updateGame(game: RaffleDocument) {
    this.gameStatus = game.status;
    this.round = game.actualRound;
    console.log('PlayComponent updateGame: ', this.gameStatus, this.round);
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

      this.adminService
        .defineNewWinner(this.players$, this.round)
        .then((result) => {
          if (result && this.collectionID && this.gameID) {
            this.createModal(result as UserInGame);
            this.confettiService.fireworks();
            this.raffleGameService.updateUserTicket(
              this.collectionID,
              result as UserInGame,
              this.round,
              this.gameID,
            );
            this.UpdateGameRound();
          } else {
            throw new Error('Something went wrong...');
          }
        });
    }
  }

  OnClickCloseGame() {
    // Ask for confirmation before closing the game
    if (confirm('Are you sure you want to close the game?')) {
      //update the firebase game with winner and change status to closed
      console.log('Closing game...');
      if (this.gameID && this.collectionID) {
        this.raffleGameService.closeRaffleGame(this.gameID, this.collectionID);
      }
    }
  }

  onChangeGameName(gameName: string) {
    console.log('onChangeGameName: new game name: ', gameName);

    this.raffleGameService.updateGameName(
      this.collectionID!,
      this.gameID!,
      gameName,
    );
  }

  UpdateGameRound() {
    //update the game round
    if (this.gameID && this.collectionID) {
      //update the total number of users in the game

      this.players$.pipe(take(1)).subscribe((users) => {
        this.raffleGameService.updateGameRound(
          this.collectionID!,
          this.gameID!,
          this.round,
          users.length,
        );
      });
    }
  }

  createModal(user: UserInGame) {
    this.sub = this.modalService.openModal(this.entry, user).subscribe((v) => {
      //your logic
      console.log(v);
    });
  }
}
