import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs/internal/Observable';
import { RaffleDocument, RaffleGameService } from '@game';

@Component({
  selector: 'app-new-game',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative z-10 flex items-center overflow-hidden bg-white dark:bg-gray-800">
      <div class="container relative flex px-6 py-16 mx-auto">
        <div class="relative z-10 flex flex-col sm:w-2/3 lg:w-4/5">
          <h1
            class="flex flex-col text-6xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-8xl dark:text-white">
            Start HERE
          </h1>
          <p class="text-sm text-gray-700 sm:text-base dark:text-white">
            Here you can create your new online raffle game to give away your prizes. To get ed, choose a name for your
            new online game and proceed! Good luck!
          </p>

          <div class="bg-white dark:bg-gray-800 ">
            <div
              class="lg:flex lg:items-center lg:justify-between w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
              <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                <span class="block"> Your raffle game is about to start... </span>
                <span class="block text-red-500"> Ready? </span>
              </h2>
              <div class="lg:mt-0 lg:flex-shrink-0">
                <div class=" inline-flex rounded-md shadow">
                  <button
                    type="button"
                    (click)="createNew()"
                    class="py-4 px-6 sm:mt-3  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
                    Start Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class NewGameComponent {
  currentGame$!: Observable<RaffleDocument[]> | undefined;
  _playerService = inject(RaffleGameService);

  createNew() {
    this._playerService.createNewRaffle();
  }
}
