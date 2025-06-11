import { Component } from '@angular/core';

import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { take } from 'rxjs';

import { NgIcon, provideIcons } from '@ng-icons/core';

import { ActivatedRoute } from '@angular/router';
import { RaffleGameService } from '../../services/raffe-game.service';
import { HowItWorksComponent } from './how-it-works';
import {
  heroArrowRightEndOnRectangle,
  heroExclamationTriangle,
  heroXCircle,
} from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-join-game',
  standalone: true,
  imports: [ReactiveFormsModule, HowItWorksComponent, NgIcon],
  providers: [
    provideIcons({
      heroArrowRightEndOnRectangle,
      heroXCircle,
      heroExclamationTriangle,
    }),
  ],
  template: `
    <main class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1">
        <div
          class="text-center w-full mx-auto pt-20 px-4 sm:px-6 lg:py-16 lg:px-8 z-20"
        >
          <h2 class="mb-6">
            Welcome! <br />Insert your
            <span class="gradient-text">Game ID</span>
          </h2>
          <h3 class="text-lg font-semibold text-gray-700 mb-4">
            Join the lucky extraction event and try your luck!
          </h3>

          @if (showWarning) {
            <div
              class="bg-yellow-100 rounded-lg py-5 px-6 mt-3 mb-3 text-base justify-center text-yellow-700 inline-flex items-center w-full"
              role="alert"
            >
              <ng-icon
                name="heroExclamationTriangle"
                size="20"
                class="mr-2 fill-current"
              />
              You can't jump in the game...<br />
              This game is already {{ gameStatus }}!
            </div>
          }
          @if (showError) {
            <div
              class="bg-red-100 rounded-lg py-5 px-6 mb-3 mt-3 text-base justify-center text-red-700 inline-flex items-center w-full"
              role="alert"
            >
              <ng-icon name="heroXCircle" size="20" class="mr-2 fill-current" />
              The game ID is not valid!
            </div>
          }
          <div class="lg:mt-0 lg:flex-shrink-0">
            <div class="mt-12 md:inline-flex md:gap-2 rounded-md">
              <div class=" relative mt-6">
                <input
                  type="number"
                  id="game-id"
                  [formControl]="mygameid"
                  required
                  minlength="6"
                  maxlength="6"
                  autocomplete="off"
                  class=" rounded-lg border-transparent flex-1 appearance-none text-center border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  placeholder="game id eg: 001122"
                  [autofocus]="true"
                />
              </div>
              <div class="relative mt-6">
                <button
                  class="w-full btn-primary"
                  (click)="clickOnVerifyGameID()"
                >
                  <ng-icon
                    name="heroArrowRightEndOnRectangle"
                    size="20"
                    class="mr-2"
                  />
                  Join now!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <app-how-it-work />
    </main>
  `,
  styles: [],
})
export class JoinGameComponent {
  mygameid = new FormControl();
  gameStatus = 'ready';
  showError = false;
  showWarning = false;

  constructor(
    private raffleGameService: RaffleGameService,
    private route: ActivatedRoute,
  ) {
    this.route.queryParams.subscribe((params) => {
      this.mygameid.setValue(params['game']);
    });
  }

  clickOnVerifyGameID() {
    const gameID = this.mygameid.value as number;
    // check game id
    // if correct, generate new ID and go to assign ticket
    // TODO: check if the user already have a ticket for this game
    this.raffleGameService
      .getGameByID(gameID)
      .pipe(take(1))
      .subscribe((gameDoc) => {
        const game = gameDoc[0];
        if (game) {
          if (game.status === 'ready' && gameDoc[0].collectionID) {
            this.raffleGameService.AddNewUserToGame(gameDoc[0].collectionID);
            return true;
          } else {
            this.showWarning = true;
            this.gameStatus = game.status;
            throw new Error('Game ID already started');
          }
        } else {
          this.showError = true;
          throw new Error('Game ID not valid');
        }
      });
  }
}
