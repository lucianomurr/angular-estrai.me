import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { NotifyMeComponent } from './notify-me/notify-me.component';
import { AuthService } from '@auth';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, RouterModule, CardsComponent, NotifyMeComponent],
  template: `
    <div class="relative z-10 flex items-center overflow-hidden bg-white dark:bg-gray-800">
      <div class="container relative flex px-6 py-16 mx-auto">
        <div class="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
          <span class="w-20 h-2 mb-12 bg-gray-800 dark:bg-white"> </span>
          <h1
            class="flex flex-col text-6xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-8xl dark:text-white">
            Play
            <span class="text-5xl sm:text-7xl"> together with fun </span>
          </h1>
          <p class="text-sm text-gray-700 sm:text-base dark:text-white">
            Want to organize a simple raffle game in your meeting or meetup?
          </p>
          <p class="text-sm text-gray-700 sm:text-base dark:text-white">
            Is simple and give you the ability to give away gift randomly.
          </p>
          <p class="text-sm text-gray-700 sm:text-base dark:text-white">Play for free!</p>
          <div class="flex mt-8" *ngIf="authService.auth.user | async as user; else showLoginHome">
            <a
              [routerLink]="['/game']"
              routerLinkActive="router-link-active"
              class="px-4 py-2 mr-4 text-white uppercase bg-red-600 border-2 border-transparent rounded-lg text-md hover:bg-red-800">
              Get started
            </a>
            <a
              [routerLink]="['/game/join']"
              class="px-4 py-2 text-red-600 uppercase bg-transparent border-2 border-red-600 rounded-lg dark:text-white hover:bg-red-600 hover:text-white text-md">
              Join
            </a>
          </div>
          <ng-template #showLoginHome>
            <div class="flex mt-8">
              <a
                routerLink="/auth"
                class="px-4 py-2 mr-4 text-white uppercase bg-red-600 border-2 border-transparent rounded-lg text-md hover:bg-red-800">
                Login to start
              </a>
              <a
                [routerLink]="['/game/join']"
                class="px-4 py-2 text-red-600 uppercase bg-transparent border-2 border-red-600 rounded-lg dark:text-white hover:bg-red-600 hover:text-white text-md">
                Join
              </a>
            </div>
          </ng-template>
        </div>
        <div class="relative hidden sm:block sm:w-1/3 lg:w-3/5">
          <img src="./assets/undraw_winners.svg" class="max-w-xs m-auto md:max-w-sm" />
        </div>
      </div>
    </div>
    <app-cards />
    <app-notify-me />
  `,
  styles: [],
})
export class IndexComponent {
  constructor(public authService: AuthService) {}
}
