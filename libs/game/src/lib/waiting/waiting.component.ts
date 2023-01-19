import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RaffleGameService, UserInGame } from '../raffe-game.service';
import { Observable, take } from 'rxjs';

import { Firestore, Timestamp } from '@angular/fire/firestore';

import { doc, DocumentData, getDoc, getFirestore, QueryDocumentSnapshot } from '@angular/fire/firestore';

@Component({
  selector: 'app-waiting',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white dark:bg-gray-800 ">
      <div
        class="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20"
        *ngIf="ticketData$ | async as ticket">
        <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
          <span class="block"> Welcome! </span>
          <span class="block">This is your ticket details</span>
        </h2>
        <div class="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 sm:w-80 md:w-120">
          <div class="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-800">
            <p class="text-sm font-semibold text-gray-700 border-b border-gray-200 w-max  dark:text-white">
              Ticket number
            </p>
            <div class="flex my-6 space-x-2 justify-center">
              <p class="text-8xl font-bold text-black dark:text-white "
              [ngClass]="{'text-green-500': ticket[0].win}">
                {{ ticket[0].ticketID }}
              </p>
            </div>
            <div class="dark:text-white">
              <div
                class="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
                <p>Created at</p>
                <div class="flex items-end text-xs">
                  {{ timestampToDate(ticket[0].joinDate) | date : 'mediumTime' }}
                </div>
              </div>
              <div
                class="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
                <p>Assigned to:</p>
                <div class="flex items-end text-xs">{{ ticket[0].name }}</div>
              </div>
              <div
                *ngIf="ticket[0].win"
                class="flex my-6 space-x-2 justify-center">
                <span class="text-xl font-bold text-green-500 dark:text-white ">You win round {{ ticket[0].round }}</span>
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
  public ticketData$: Observable<UserInGame[]>;

  constructor(private route: ActivatedRoute, public raffleGameService: RaffleGameService) {
    this.gameID = this.route.snapshot.paramMap.get('gameID') || '';
    this.ticketID = this.route.snapshot.paramMap.get('ticketID') || '';

    raffleGameService.getUserTicketDetail(this.gameID, this.ticketID).then(res => {
      this.ticketData$ = res;
    });
  }

  timestampToDate(timestamp: Timestamp | Date): Date {
    if (timestamp instanceof Timestamp) {
      return new Date(+timestamp.seconds * 1000);
    } else {
      console.warn(`could not convert ${timestamp} to date!`);
      return timestamp;
    }
  }
}
