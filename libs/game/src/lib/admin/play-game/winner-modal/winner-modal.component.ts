import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInGame } from '../../../interface/player-user.interface';
import { ModalService } from '@game';

@Component({
  selector: 'app-winner-modal',
  standalone: true,
  imports: [CommonModule],
  providers: [ModalService],
  template: `
    <section [class.open]="display" class="fixed z-10 inset-0 overflow-y-auto" (click)="close()">
      <div
        class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:p-0 bg-gray-900 bg-opacity-40">
        <div
          (click)="$event.stopPropagation()"
          class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <!--
            collectionID: "H5WuRJ48f78OJhT78MUA"
            joinDate: nt {seconds: 1683318106, nanoseconds: 928000000}
            name: "massimo"
            round: 1
            ticketID: "ddb461"
            win: true
          -->
            {{ user?.name }}
            {{ user?.ticketID }}
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      section {
        visibility: hidden;
        opacity: 0;

        &.open {
          visibility: inherit;
          opacity: 1;
        }

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

  constructor(private modalService: ModalService<T>) {}

  async close(): Promise<void> {
    this.display = false;

  ngOnDestroy(): void {
    console.log(' Modal destroyed');
  }
}
