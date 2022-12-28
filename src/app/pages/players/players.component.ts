import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs/internal/Observable';
import { Player } from 'src/app/shared/model/player.interface';
import { PlayersService } from 'src/app/shared/services/players.service';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container max-w-3xl px-4 mx-auto sm:px-8">
      <div class="py-8">
        <div class="flex flex-row justify-between w-full mb-1 sm:mb-0">
          <h2 class="text-2xl leading-tight">Users</h2>
          <div class="text-end">
            <form
              class="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
              <div class=" relative ">
                <input
                  type="text"
                  id='"form-subscribe-Filter'
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="name" />
              </div>
              <button
                class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                type="submit">
                Filter
              </button>
            </form>
          </div>
        </div>
        <div class="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
          <div class="inline-block min-w-full overflow-hidden rounded-lg shadow" *ngIf="players$ | async as players">
            <table class="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    scope="col"
                    class="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                    UserId
                  </th>
                  <th
                    scope="col"
                    class="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                    Name
                  </th>
                  <th
                    scope="col"
                    class="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                    Deck
                  </th>
                  <th
                    scope="col"
                    class="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                    Edit
                  </th>
                  <th
                    scope="col"
                    class="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                    Delete
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr *ngFor="let player of players; let i = index">
                  <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    {{ i }}
                  </td>
                  <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ player.name }}
                    </p>
                  </td>
                  <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <li *ngFor="let deck of player.decks">
                      <p class="text-gray-900 whitespace-no-wrap">{{ deck.name }} - {{ deck.cards }}</p>
                    </li>
                  </td>
                  <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <a (click)="editPlayer(player)">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-6 h-6 text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </a>
                  </td>
                  <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <a (click)="deletePlayer(player)">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-6 h-6 text-red-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class PlayersComponent implements OnInit {
  players$!: Observable<Player[]>;
  _playerService = inject(PlayersService);

  ngOnInit(): void {
    this.players$ = this._playerService.getPlayers();
  }

  editPlayer(player: Player) {
    console.log('click on: ', player);
  }
  deletePlayer(player: Player) {
    if (confirm(`Sicuro di voler eliminare ${player.name}`)) {
      this._playerService.deletePlayer(player.id);
    }
  }
}
