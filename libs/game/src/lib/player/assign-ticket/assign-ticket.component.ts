import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RaffleGameService } from '../../services';
import { of, take } from 'rxjs';
import { HowItWorksComponent } from '../join-game/how-it-works';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroArrowRightEndOnRectangle } from '@ng-icons/heroicons/outline';
@Component({
  selector: 'app-assign-ticket',
  standalone: true,
  imports: [ReactiveFormsModule, HowItWorksComponent, NgIcon],
  providers: [provideIcons({ heroArrowRightEndOnRectangle })],
  template: `
    <main class="relative container mx-auto pt-20  px-4 py-8">
      <div class="grid grid-cols-1">
        <div class="card align-items-center pt-20 text-center mx-auto">
          <h2 class="text-xl font-semibold mb-4">You're almost there!</h2>

          <h2
            class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl"
          >
            <span class="block">Your ticket number is:</span>

            <span class="gradient-text">{{ ticketNumber }}</span>
          </h2>

          <div class="lg:mt-0 lg:flex-shrink-0">
            <div
              class="flex flex-col gap-8 p-4 mt-12 inline-flex rounded-md md:gap-2"
            >
              <label
                for="user-ticket-name"
                class=" inset-y-0 left-0 flex items-center pl-3"
              >
                Complete the ticket with your name:<br />
              </label>
              <div class="flex flex-col items-center py-2 gap-2">
                <input
                  type="text"
                  id="user-ticket-name"
                  [formControl]="userTicketName"
                  required
                  minlength="2"
                  maxlength="25"
                  class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent pb-2"
                  placeholder="Your Name"
                />

                <button
                  class="w-full btn-primary py-2"
                  (click)="clickOnAssignTicket()"
                >
                  <ng-icon
                    name="heroArrowRightEndOnRectangle"
                    size="20"
                    class="mr-2"
                  />
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <app-how-it-work />
    </main>
  `,
  styles: [],
})
export class AssignTicketComponent {
  userTicketName = new FormControl('');
  public ticketNumber: string;
  public gameDocID: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private raffleGameService: RaffleGameService,
  ) {
    this.ticketNumber = this.route.snapshot.paramMap.get(
      'ticketNumber',
    ) as string;
    this.gameDocID = this.route.snapshot.paramMap.get('gameID') as string;
  }
  clickOnAssignTicket() {
    //todo: set the user email to the ticket (only for unauthenticated user)
    console.log(this.userTicketName.value);

    if (this.userTicketName.value && this.userTicketName.valid) {
      of(
        this.raffleGameService.updateTicketName(
          this.gameDocID,
          this.ticketNumber,
          this.userTicketName.value,
        ),
      )
        .pipe(take(1))
        .subscribe(() => {
          this.router.navigate([
            `game/waiting/${this.gameDocID}/ticket/${this.ticketNumber}`,
          ]);
        });
    }
  }
}
