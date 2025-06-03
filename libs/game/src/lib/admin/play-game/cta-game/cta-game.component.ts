import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-cta-game',
  standalone: true,
  imports: [],
  template: `
    @if (status !== 'closed') {
      <div class="flex justify-center mb-8">
        <button
          class="flex items-center px-6 py-2  transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 dark:border-gray-300 focus:outline-none dark:text-gray-300 mr-2"
          (click)="clickOnStartGame()"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
            />
          </svg>
          @if (round === 0) {
            <span>Start</span>
          } @else {
            Continue
          }
        </button>
        <button
          class="flex items-center px-6 py-2  transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 dark:border-gray-300 focus:outline-none dark:text-gray-300"
          (click)="clickOnCloseGame()"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
          Finish!
        </button>
      </div>
    } @else {
      <div class="flex justify-center mb-8">
        <p
          class="mb-12 text-2xl font-normal text-center text-gray-500 dark:text-gray-300"
        >
          This great game has been closed.
        </p>
      </div>
    }
  `,
  styles: [],
})
export class CtaGameComponent {
  @Input() round = 0;
  @Input() status = 'ready';
  @Output() startGameEvent = new EventEmitter();
  @Output() closeGameEvent = new EventEmitter();

  clickOnStartGame() {
    this.startGameEvent.emit();
  }
  clickOnCloseGame() {
    this.closeGameEvent.emit();
  }
}
