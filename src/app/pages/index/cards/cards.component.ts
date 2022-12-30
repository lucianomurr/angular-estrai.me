import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex-wrap items-center justify-center gap-8 text-center sm:flex">
      <div class="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 dark:bg-gray-800">
        <div class="flex-shrink-0">
          <div class="flex items-center justify-center w-12 h-12 mx-auto text-white bg-red-500 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" />
            </svg>
          </div>
        </div>
        <h3 class="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">A new game</h3>
        <p class="py-4 text-gray-500 text-md dark:text-gray-300">
          Easy to use, just log-in and create your game, it's totally free and really fast! Less than a minute to create
          a new game!
        </p>
      </div>
      <div
        class="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 sm:mt-16 md:mt-20 lg:mt-24 dark:bg-gray-800">
        <div class="flex-shrink-0">
          <div class="flex items-center justify-center w-12 h-12 mx-auto text-white bg-red-500 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
          </div>
        </div>
        <h3 class="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">In Person Event</h3>
        <p class="py-4 text-gray-500 text-md dark:text-gray-300">
          Are you hosting a meetup, event, and want to engage more people with a raffle? You can do it with estrai.me.
        </p>
      </div>
      <div class="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 dark:bg-gray-800">
        <div class="flex-shrink-0">
          <div class="flex items-center justify-center w-12 h-12 mx-auto text-white bg-red-500 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>
          </div>
        </div>
        <h3 class="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">Ticket is virtual</h3>
        <p class="py-4 text-gray-500 text-md dark:text-gray-300">
          Ticket is virtual, each user can take his ticket directly with his the device.
        </p>
      </div>
    </div>
  `,
  styles: [],
})
export class CardsComponent {}
