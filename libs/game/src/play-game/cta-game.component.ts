import { Component, Output, EventEmitter, Input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  heroPlay,
  heroArrowPath,
  heroLockClosed,
} from '@ng-icons/heroicons/outline';
import { UserInGame } from '../interface/player-user.interface';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-cta-game',
  standalone: true,
  imports: [NgIcon, CommonModule],
  providers: [
    provideIcons({
      heroPlay,
      heroArrowPath,
      heroLockClosed,
    }),
  ],
  template: `
    <div class="card">
      <h2 class="text-xl font-semibold mb-4">Game Controls</h2>
      @if (status !== 'closed') {
        <div class="space-y-3">
          @if (participants$ | async; as participants) {
            @if (spinning === false && participants.length > 0) {
              <button class="w-full btn-primary" (click)="clickOnStartGame()">
                <ng-icon name="heroPlay" size="20" class="mr-2" />
                @if (round === 0) {
                  Start Spin
                } @else {
                  New round
                }
              </button>
            }
            @if (spinning) {
              <button
                disabled
                class="w-full btn bg-purple-600 text-white opacity-75 cursor-not-allowed"
              >
                <ng-icon
                  name="heroArrowPath"
                  size="20"
                  class="mr-2 animate-spin"
                />
                Spinning...
              </button>
            }
          }

          <button
            class="w-full btn-outline border-red-300 text-red-600 hover:bg-red-50"
            (click)="clickOnCloseGame()"
          >
            <ng-icon name="heroLockClosed" size="20" class="mr-2" />
            Close Game
          </button>
        </div>
      } @else {
        <div class="text-center py-12">
          <ng-icon
            name="heroLockClosed"
            class="text-gray-400"
            size="20"
          ></ng-icon>
          <h3 class="text-lg font-medium text-gray-900 mb-2">Game Closed</h3>
          <p class="text-gray-600 mb-6">
            The game is closed. You can start a new game or view the results.
          </p>
        </div>
      }
    </div>
  `,
  styles: [],
})
export class CtaGameComponent {
  @Input() round: number;
  @Input() status: string;
  @Input() participants$: Observable<UserInGame[]>;
  @Output() startGameEvent = new EventEmitter();
  @Output() closeGameEvent = new EventEmitter();

  public spinning = false;

  clickOnStartGame() {
    this.spinning = true;
    setTimeout(() => {
      this.spinning = false;
      this.startGameEvent.emit();
    }, 1000);
  }
  clickOnCloseGame() {
    this.closeGameEvent.emit();
  }
}
