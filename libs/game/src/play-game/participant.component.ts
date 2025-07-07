import { Component, Input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  heroUsers,
  heroTrophy,
  heroUserPlus,
  heroArrowDownTray,
  heroTrash,
} from '@ng-icons/heroicons/outline';

import { CommonModule } from '@angular/common';
import { UserInGame } from '../interface/player-user.interface';

@Component({
  selector: 'app-participant-list',
  imports: [NgIcon, CommonModule],
  providers: [
    provideIcons({
      heroUsers,
      heroTrophy,
      heroUserPlus,
      heroArrowDownTray,
      heroTrash,
    }),
  ],
  template: `
    <div class="card">
      <div class="flex items-center justify-between mb-6">
        <div class="flex items-center gap-3">
          <h2 class="text-xl font-semibold">Participants</h2>
          <span
            class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium"
          >
            @if (participants?.length !== 0) {
              {{ participants?.length }}
            } @else {
              0
            }
          </span>
        </div>
        <div class="flex items-center gap-2">
          @if (gameStatus !== 'closed') {
            <button class="hidden btn-outline text-sm">
              <ng-icon name="heroUserPlus" class="mr-2" />
              Add Manually
            </button>
          }
          <button class="hidden btn-outline text-sm">
            <ng-icon name="heroArrowDownTray" class="mr-2" />
            Export List
          </button>
        </div>
      </div>

      <!-- Participant List ----  no users in the game -->
      @if (participants?.length === 0) {
        <div class="text-center py-12">
          <ng-icon name="heroUsers" class="text-gray-400" size="30"></ng-icon>

          <h3 class="text-lg font-medium text-gray-900 mb-2">
            No participants yet
          </h3>
          <p class="text-gray-600 mb-6">
            Share the game ID or QR code to let people join
          </p>
        </div>
      } @else {
        <!-- Participant List in the game DESKTOP -->
        <div class="hidden md:block overflow-x-auto max-vh-80">
          <table class="w-full">
            <thead>
              <tr class="border-b border-gray-200">
                <th class="text-left py-3 px-4">Participant</th>
                <th class="text-left py-3 px-4">Ticket #</th>
                <th class="text-left py-3 px-4">Joined At</th>
                <!-- <th class="text-right py-3 px-4">Actions</th> -->
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              @for (participant of participants; track participant.ticketID) {
                <tr key="participant.id">
                  <td class="py-3 px-4">
                    <div class="flex items-center gap-3">
                      <img
                        alt="profil"
                        src="https://ui-avatars.com/api/?name={{
                          participant.name
                        }}&size=150&background={{
                          participant.ticketID
                        }}&color=fff"
                        class="object-cover rounded-full h-16 w-16 "
                      />

                      <div>
                        <p class="font-medium text-gray-900">
                          {{ participant.name }}
                        </p>
                      </div>

                      @if (participant.win) {
                        <span
                          class="tracking-wider text-white btn-accent px-4 py-1 text-sm rounded-full leading-loose mx-2 font-semibold"
                          title=""
                        >
                          <ng-icon name="heroTrophy" class="text-white" />
                          {{ participant.round }}
                        </span>
                      }
                    </div>
                  </td>
                  <td class="py-3 px-4">
                    Ticket:<span
                      class="font-mono text-sm bg-gray-100 px-2 py-1 rounded-sm"
                      >#{{ participant.ticketID }}
                    </span>
                  </td>
                  <td class="py-3 px-4 text-gray-600 text-sm">
                    {{
                      participant.joinDate.toDate()
                        | date: 'dd/MM/yyyy hh:mm:ss'
                    }}
                  </td>
                  <!-- <td class="py-3 px-4 text-right">
                    <button
                      class="text-red-600 hover:text-red-800 text-sm font-medium"
                    >
                      <ng-icon name="heroTrash" class="mr-2" size="20" />
                    </button>
                  </td> -->
                </tr>
              }
            </tbody>
          </table>
        </div>

        <!-- Participant List in the game MOBILE -->
        <div class="md:hidden space-y-4">
          @for (participant of participants; track participant.ticketID) {
            <div key="{participant.id}">
              <div class="flex items-center gap-3 mb-3">
                <img
                  alt="profil"
                  src="https://ui-avatars.com/api/?name={{
                    participant.name
                  }}&size=150&background={{ participant.ticketID }}&color=fff"
                  class="object-cover rounded-full h-16 w-16 "
                />
                <div class="flex-1">
                  <div class="flex items-center gap-2">
                    <p class="font-medium text-gray-900">
                      {{ participant.name }}
                    </p>
                    @if (participant.win) {
                      <span
                        class="tracking-wider text-white bg-secondary-800 px-4 py-1 text-sm rounded-full leading-loose mx-2 font-semibold"
                        title=""
                      >
                        <ng-icon name="heroTrophy" class="text-white" />
                        {{ participant.round }}
                      </span>
                    }
                  </div>
                </div>
              </div>
              <div class="flex items-center justify-between text-sm">
                <span class="font-mono bg-gray-100 px-2 py-1 rounded-sm">
                  Ticket #{{ participant.ticketID }}
                </span>
                <span class="text-gray-600">
                  {{
                    participant.joinDate.toDate() | date: 'dd/MM/yyyy hh:mm:ss'
                  }}
                </span>
              </div>
              <div class="mt-3 text-right">
                <button
                  class="text-red-600 hover:text-red-800 text-sm font-medium"
                >
                  Remove
                </button>
              </div>
            </div>
          }
        </div>
      }
    </div>
  `,
  styles: [``],
})
export class GameParticipantListComponent {
  @Input() public participants: UserInGame[] | null = [];
  @Input() public gameStatus: string = '';
}
