import { Component } from '@angular/core';

import { Observable } from 'rxjs/internal/Observable';
import { RaffleDocument } from '../../interface/game.interface';
import { RaffleGameService } from '../../services';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from '@data-access';

@Component({
  selector: 'app-new-game',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative flex items-center min-h-screen bg-gray-50 ">
      <main class="container mx-auto px-4 py-8 mt-20">
        @if (userService.userData; as user) {
          <h1 class="text-3xl font-bold mb-8">
            Welcome back, {{ user.displayName }}!
          </h1>
        }
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <a
            (click)="createNew()"
            class="card hover:shadow-xl group p-6 flex flex-col items-center justify-center text-center"
          >
            <div
              class="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-4 group-hover:bg-primary-600 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
            <h2 class="text-xl font-semibold mb-2">Create New Game</h2>
            <p class="text-gray-600">
              Start a new lucky spin event from scratch
            </p>
          </a>

          <a
            to="/my-games"
            class="card hover:shadow-xl group p-6 flex flex-col items-center justify-center text-center"
          >
            <div
              class="w-16 h-16 rounded-full bg-secondary-100 flex items-center justify-center mb-4 group-hover:bg-secondary-500 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="6" x2="10" y1="11" y2="11"></line>
                <line x1="8" x2="8" y1="9" y2="13"></line>
                <line x1="15" x2="15.01" y1="12" y2="12"></line>
                <line x1="18" x2="18.01" y1="10" y2="10"></line>
                <path
                  d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"
                ></path>
              </svg>
            </div>
            <h2 class="text-xl font-semibold mb-2">My Games</h2>
            <p class="text-gray-600">View and manage your created games</p>
          </a>

          <a
            to="/active-game"
            class="card hover:shadow-xl group p-6 flex flex-col items-center justify-center text-center"
          >
            <div
              class="w-16 h-16 rounded-full bg-accent-100 flex items-center justify-center mb-4 group-hover:bg-accent-400 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
                />
              </svg>
            </div>
            <h2 class="text-xl font-semibold mb-2">Active Game</h2>
            <p class="text-gray-600">Resume your currently active game</p>
          </a>
        </div>

        <div class="bg-white rounded-2xl shadow-lg p-6">
          <h2 class="text-2xl font-semibold mb-6">Recent Games</h2>
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="border-b border-gray-200">
                  <th class="text-left py-3 px-4">Game Name</th>
                  <th class="text-left py-3 px-4">Created</th>
                  <th class="text-left py-3 px-4">Status</th>
                  <th class="text-left py-3 px-4">Participants</th>
                  <th class="text-right py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                @if (currentGames$ | async; as userGames) {
                  @for (game of userGames; track game.collectionID) {
                    <tr>
                      <td class="py-3 px-4">{{ game.gameID }}</td>
                      <td class="py-3 px-4">
                        {{ game.creationDate.toDate() | date: 'dd/MM-yyyy' }}
                      </td>
                      <td class="py-3 px-4">
                        <span
                          class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium "
                          [ngClass]="{
                            'bg-green-100 text-green-800':
                              game.status === 'ready',
                            'bg-blue-100 text-blue-800':
                              game.status === 'started',
                            'bg-yellow-100 text-yellow-800':
                              game.status === 'closed',
                          }"
                        >
                          {{ game.status }}
                        </span>
                      </td>
                      <td class="py-3 px-4">{{ game.totalUsers }}</td>
                      <td class="py-3 px-4 text-right">
                        <button
                          class="text-primary-600 hover:text-primary-800"
                          (click)="goToGame(game.gameID)"
                        >
                          @if (game.status === 'ready') {
                            Manage
                          } @else if (game.status === 'started') {
                            View
                          } @else if (game.status === 'closed') {
                            View Results
                          }
                        </button>
                      </td>
                    </tr>
                  }
                }
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  `,
  styles: [],
})
export class DashboardComponent {
  currentGames$!: Observable<RaffleDocument[]>;

  createNew() {
    this._playerService.createNewRaffle();
  }

  constructor(
    private _playerService: RaffleGameService,
    private router: Router,
    public userService: UserService,
  ) {
    this.currentGames$ = this._playerService.getAdminUserGames();
  }

  goToGame(gameID: string) {
    this.router.navigate([`game/manage/${gameID}`]);
  }
}
