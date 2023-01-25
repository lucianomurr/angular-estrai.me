import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { take } from 'rxjs';
import { AutofocusDirective } from '../../directives/autofocus.directive';
import { RaffleGameService } from '@game';

@Component({
  selector: 'app-join-game',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, AutofocusDirective],
  template: `
    <div class="bg-white dark:bg-gray-800 ">
      <div class="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
          <span class="block"> Insert your game ID! </span>
          <span class="block text-red-600"> The next winner could be you... </span>
        </h2>
        <div
          class="bg-yellow-100 rounded-lg py-5 px-6 mt-3 mb-3 text-base justify-center text-yellow-700 inline-flex items-center w-full"
          role="alert"
          *ngIf="showWarning">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="exclamation-triangle"
            class="w-4 h-4 mr-2 fill-current"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512">
            <path
              fill="currentColor"
              d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path>
          </svg>
          You can't jump in the game, this game is {{ gameStatus }}!
        </div>
        <div
          *ngIf="showError"
          class="bg-red-100 rounded-lg py-5 px-6 mb-3 mt-3 text-base justify-center text-red-700 inline-flex items-center w-full"
          role="alert">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="times-circle"
            class="w-4 h-4 mr-2 fill-current"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512">
            <path
              fill="currentColor"
              d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path>
          </svg>
          The game ID is not valid!
        </div>
        <div class="lg:mt-0 lg:flex-shrink-0">
          <div class="mt-12 md:inline-flex rounded-md shadow">
            <div class=" relative mt-6">
              <input
                type="number"
                id="game-id"
                [formControl]="mygameid"
                required
                minlength="6"
                maxlength="6"
                autocomplete="off"
                class=" rounded-lg border-transparent flex-1 appearance-none text-center border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                placeholder="game id eg: 001122"
                [autofocus]="true" />
            </div>
            <div class="relative mt-6">
              <button
                type="button"
                class="py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                (click)="clickOnVerifyGameID()">


                Enter now!

              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white dark:bg-gray-800 w-full mx-auto p-8">
        <div class="w-10 h-10 m-auto mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
          </svg>
        </div>
        <p class="text-gray-600 dark:text-white w-full md:w-2/3 m-auto text-center text-lg md:text-3xl">
          <span class="font-bold text-red-800"> “ </span>
          Explain how the extraction works...
          <span class="font-bold text-red-800"> ” </span>
        </p>
        <div class="flex items-center justify-center mt-8">
          <a href="#" class="relative block">
            <img
              alt="profil"
              src="https://ui-avatars.com/api/?name=Luciano"
              class="mx-auto object-cover rounded-full h-10 w-10 " />
          </a>
          <div class="flex items-center justify-center ml-2">
            <span class="mr-2 text-lg font-semibold text-red-600"> Luciano </span>
            <span class="text-xl font-light text-gray-400"> / </span>
            <span class="ml-2 text-gray-400 text-md">  </span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class JoinGameComponent {
  mygameid = new FormControl();
  gameStatus = 'ready';
  showError = false;
  showWarning = false;

  constructor(private raffleGameService: RaffleGameService) {}

  clickOnVerifyGameID() {
    const gameID = this.mygameid.value as number;
    // check game id
    // if correct, generate new ID and go to assign ticket
    // TODO: check if the user already have a ticket for this game
    this.raffleGameService
      .getGameByID(gameID)
      .pipe(take(1))
      .subscribe(gameDoc => {
        const game = gameDoc[0];
        if (game){
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
