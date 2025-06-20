import { Component, inject, OnInit } from '@angular/core';

import { Observable } from 'rxjs/internal/Observable';
import { RaffleDocument } from '../../interface/game.interface';
import { RaffleGameService } from '../../services';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from '@data-access';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  matAdd,
  matPlayCircle,
  matSportsEsports,
} from '@ng-icons/material-icons/baseline';

@Component({
  selector: 'app-new-game',
  standalone: true,
  imports: [CommonModule, NgIcon],
  providers: [
    provideIcons({
      matAdd,
      matSportsEsports,
      matPlayCircle,
    }),
  ],
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
              class="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300"
            >
              <ng-icon name="matAdd" size="24"></ng-icon>
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
              class="w-16 h-16 rounded-full bg-secondary-100 flex items-center justify-center mb-4 group-hover:bg-secondary-500 group-hover:text-white transition-colors duration-300"
            >
              <ng-icon name="matSportsEsports" size="24"></ng-icon>
            </div>
            <h2 class="text-xl font-semibold mb-2">My Games</h2>
            <p class="text-gray-600">View and manage your created games</p>
          </a>

          <a
            to="/active-game"
            class="card hover:shadow-xl group p-6 flex flex-col items-center justify-center text-center"
          >
            <div
              class="w-16 h-16 rounded-full bg-accent-100 flex items-center justify-center mb-4 group-hover:bg-accent-400 group-hover:text-white transition-colors duration-300"
            >
              <ng-icon name="matPlayCircle" size="24"></ng-icon>
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
                      <td
                        class="py-3 px-4"
                        [innerText]="game.gameName || game.gameID"
                      ></td>
                      <td class="py-3 px-4">
                        {{ game.creationDate.toDate() | date: 'short' }}
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
export class DashboardComponent implements OnInit {
  private _playerService = inject(RaffleGameService);
  private router = inject(Router);
  userService = inject(UserService);

  currentGames$!: Observable<RaffleDocument[]>;

  createNew() {
    this._playerService.createNewRaffle();
  }

  ngOnInit() {
    this.currentGames$ = this._playerService.getAdminUserGames();
  }

  goToGame(gameID: string) {
    this.router.navigate([`game/manage/${gameID}`]);
  }
}
