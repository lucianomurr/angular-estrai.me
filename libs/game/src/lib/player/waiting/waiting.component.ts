import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable, take } from 'rxjs';

import { Timestamp } from '@angular/fire/firestore';
import { RaffleGameService } from '../../services/raffe-game.service';
import { UserInGame } from '../../interface/player-user.interface';
import { ConfettiService } from '../../services/confetti.service';

@Component({
  selector: 'app-waiting',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen flex pt-20 items-center bg-white overflow-hidden">
      <main class="container mx-auto px-4 py-8">
        <h2 class="text-xxl font-semibold mb-4">Your ticket details</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          @if (ticketData$ | async; as ticketData) {
            <div
              class="card"
              [ngClass]="
                ticketData[0].win
                  ? 'bg-accent-500 dark:bg-accent-500'
                  : 'bg-white dark:bg-white'
              "
            >
              <p
                class="text-sm font-semibold border-b border-gray-600 dark:border-gray-200 w-max"
                [ngClass]="
                  ticketData[0].win
                    ? 'text-gray-700 dark:text-gray-700'
                    : 'text-gray-700 dark:text-gray-900'
                "
              >
                Ticket number
              </p>

              <div class="flex my-6 space-x-2 justify-center">
                <p
                  class="text-8xl font-bold"
                  [ngClass]="
                    ticketData[0].win
                      ? 'text-black dark:text-gray-100'
                      : 'text-gray-700 dark:text-gray-900'
                  "
                >
                  #{{ ticketData[0].ticketID }}
                </p>
              </div>
            </div>
            <div class="card">
              <div
                [ngClass]="
                  ticketData[0].win
                    ? 'text-black dark:text-gray-100'
                    : 'text-gray-700 dark:text-gray-900'
                "
              >
                <div
                  class="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-600 dark:border-gray-200 md:space-x-24"
                >
                  <p>Created at</p>
                  <div class="flex items-end text-xs">
                    {{
                      timestampToDate(ticketData[0].joinDate)
                        | date: 'dd/MM/yyyy hh:mm:ss'
                    }}
                  </div>
                </div>
                <div
                  class="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-600 dark:border-gray-200 md:space-x-24"
                >
                  <p>Assigned to:</p>
                  <div class="flex items-end text-xs">
                    {{ ticketData[0].name }}
                  </div>
                </div>
                @if (ticketData[0].win) {
                  <div class="flex my-6 space-x-2 justify-center">
                    <span
                      class="text-xl font-bold text-green-600 dark:text-white "
                    >
                      🎉 YOU WIN ROUND {{ ticketData[0].round }} 🎉</span
                    >
                  </div>
                }
              </div>
            </div>
          }
        </div>
      </main>
    </div>
  `,
  styles: [],
})
export class WaitingComponent {
  public gameID: string;
  public ticketID: string;
  public ticketData$: Observable<UserInGame[]> | undefined;

  constructor(
    private route: ActivatedRoute,
    public raffleGameService: RaffleGameService,
    private confettiService: ConfettiService,
  ) {
    this.gameID = this.route.snapshot.paramMap.get('gameID') || '';
    this.ticketID = this.route.snapshot.paramMap.get('ticketID') || '';

    this.ticketData$ = raffleGameService.getUserTicketDetail(
      this.gameID,
      this.ticketID,
    );

    this.ticketData$.pipe(take(1)).subscribe((ticket) => {
      if (ticket[0].win) {
        navigator.vibrate([100, 200, 100, 200]);
        this.confettiService.fireworks();
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
