import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable, take } from 'rxjs';

import { Timestamp } from '@angular/fire/firestore';
import { RaffleGameService, UserInGame } from '@game';

@Component({
  selector: 'app-waiting',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white dark:bg-gray-800">
      <div
        class="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20"
        *ngIf="ticketData$ | async as ticketData">
        <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
          <span class="block"> Welcome! </span>
          <span class="block">This is your ticket details</span>
        </h2>
        <div
          class="m-auto mt-3 overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 sm:w-80 md:w-6/12 xl:3/12 pt-6 pb-6"
          [ngClass]="ticketData[0].win ? 'bg-green-100 dark:bg-green-700' : 'bg-white dark:bg-white'">
          <div
            class="relative w-full px-4 py-6 rounded"
            [ngClass]="ticketData[0].win ? 'bg-green-100 dark:bg-green-700' : 'bg-white dark:bg-white'">
            <p
              class="text-sm font-semibold border-b border-gray-600 dark:border-gray-200 w-max"
              [ngClass]="ticketData[0].win ? 'text-black dark:text-gray-100' : 'text-gray-700 dark:text-gray-900'">
              Ticket number
            </p>
            <div class="flex my-6 space-x-2 justify-center">
              <p
                class="text-8xl font-bold"
                [ngClass]="ticketData[0].win ? 'text-black dark:text-gray-100' : 'text-gray-700 dark:text-gray-900'">
                {{ ticketData[0].ticketID }}
              </p>
            </div>
            <div [ngClass]="ticketData[0].win ? 'text-black dark:text-gray-100' : 'text-gray-700 dark:text-gray-900'">
              <div
                class="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-600 dark:border-gray-200 md:space-x-24">
                <p>Created at</p>
                <div class="flex items-end text-xs">
                  {{ timestampToDate(ticketData[0].joinDate) | date : 'mediumTime' }}
                </div>
              </div>
              <div
                class="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-600 dark:border-gray-200 md:space-x-24">
                <p>Assigned to:</p>
                <div class="flex items-end text-xs">{{ ticketData[0].name }}</div>
              </div>
              <div *ngIf="ticketData[0].win" class="flex my-6 space-x-2 justify-center">
                <span class="text-xl font-bold text-green-600 dark:text-white "
                  >You win round {{ ticketData[0].round }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class WaitingComponent {
  public gameID: string;
  public ticketID: string;
  public ticketData$: Observable<UserInGame[]> | undefined;

  constructor(private route: ActivatedRoute, public raffleGameService: RaffleGameService) {
    this.gameID = this.route.snapshot.paramMap.get('gameID') || '';
    this.ticketID = this.route.snapshot.paramMap.get('ticketID') || '';

    this.ticketData$ = raffleGameService.getUserTicketDetail(this.gameID, this.ticketID);

    this.ticketData$.pipe(take(1)).subscribe(ticket => {
      if (ticket[0].win) {
        navigator.vibrate([100, 200, 100, 200]);
      }
    });
  }

  timestampToDate(timestamp: Timestamp | Date): Date {
    if (timestamp instanceof Timestamp) {
      return new Date(+timestamp.seconds * 1000);
    } else {
      return timestamp;
    }
  }
}
