import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-waiting',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white dark:bg-gray-800 ">
      <div class="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
          <span class="block"> Welcome! </span>
          <span class="block">This is your ticket details</span>
        </h2>

        <div class="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-800">
          <p class="text-sm font-semibold text-gray-700 border-b border-gray-200 w-max dark:text-white">
            Ticket number
          </p>
          <div class="flex items-end my-6 space-x-2">
            <p class="text-5xl font-bold text-black dark:text-white">
              {{ ticketNumber }}
            </p>
          </div>
          <div class="dark:text-white">
            <div
              class="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
              <p>Created at</p>
              <div class="flex items-end text-xs">10/10/2023</div>
            </div>
            <div
              class="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
              <p>Assigned to:</p>
              <div class="flex items-end text-xs">Luciano Murruni</div>
            </div>
            <div class="flex items-center justify-between space-x-12 text-sm md:space-x-24">
              <p>GameID</p>
              <div class="flex items-end text-xs">AAFFCC6</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class WaitingComponent {
  public ticketNumber: string | null;
  constructor(private route: ActivatedRoute) {
    this.ticketNumber = this.route.snapshot.paramMap.get('ticketNumber');
  }
}
