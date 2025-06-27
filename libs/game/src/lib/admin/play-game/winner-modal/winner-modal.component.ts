import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { UserInGame } from '../../../interface/player-user.interface';

@Component({
  selector: 'app-winner-modal',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  providers: [],
  template: `
    <section class="fixed z-10 inset-0 overflow-y-auto" (click)="close()">
      <div
        class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:p-0 bg-gray-900 bg-opacity-80"
      >
        <div
          (click)="$event.stopPropagation()"
          class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <!--body-->
            <div class="text-center p-5 flex-auto justify-center">
              <img
                ngSrc="/assets/congratulations-icon.svg"
                width="600"
                height="120"
              />
              <h2 class="text-8xl font-bold py-4 text-green-500">
                {{ user?.ticketID }}
              </h2>
              <p class="text-xl text-gray-500 px-8">
                <b>{{ user?.name | uppercase }}</b> you win round:
                {{ user?.round }}
              </p>
            </div>
          </div>
          <!--footer-->
          <div class="p-3  mt-2 text-center space-x-4 md:block">
            <button
              (click)="close()"
              class="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-xs font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      section {
        transition: opacity 250ms ease-in;
      }
    `,
  ],
})
export class WinnerModalComponent implements OnInit, OnDestroy {
  @Input() user: UserInGame | null;
  @Input() round: number | null;
  @Output() closeMeEvent = new EventEmitter();
  @Output() confirmEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    console.log('Modal init');
  }

  close() {
    this.closeMeEvent.emit();
  }
  confirm() {
    this.confirmEvent.emit();
  }

  ngOnDestroy(): void {
    console.log(' Modal destroyed');
  }
}
