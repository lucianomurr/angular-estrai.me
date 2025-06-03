import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  template: `
    <!-- component -->
    <section class="bg-white dark:bg-gray-900">
      <div class="container px-6 py-10 mx-auto">
        <h1
          class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white"
        >
          MAIN FEATURE
        </h1>

        <p class="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
          Easy to create and manage your raffle in a second.
        </p>

        <div
          class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3"
        >
          <div
            class="p-8 space-y-3 border-2 border-red-400 dark:border-red-300 rounded-xl"
          >
            <span class="inline-block text-red-500 dark:text-red-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                />
              </svg>
            </span>

            <h1
              class="text-2xl font-semibold text-gray-700 capitalize dark:text-white"
            >
              Start in a second
            </h1>

            <p class="text-gray-500 dark:text-gray-300">
              Just log-in and create your game, it's totally free and really
              fast! Less than a minute to create a new game and let people join
              to the game!
            </p>

            @if (false) {
              <a
                href="#"
                class="inline-flex p-2 text-red-500 capitalize transition-colors duration-200 transform bg-red-100 rounded-full dark:bg-red-500 dark:text-white hover:underline hover:text-red-600 dark:hover:text-red-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>
            }
          </div>

          <div
            class="p-8 space-y-3 border-2 border-red-400 dark:border-red-300 rounded-xl"
          >
            <span class="inline-block text-red-500 dark:text-red-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                />
              </svg>
            </span>

            <h1
              class="text-2xl font-semibold text-gray-700 capitalize dark:text-white"
            >
              Easy to engage
            </h1>

            <p class="text-gray-500 dark:text-gray-300">
              Even if you hosting your event or an online event.. if you want to
              engage people with a give away... You can do it with estrai.me.
            </p>

            @if (false) {
              <a
                href="#"
                class="inline-flex p-2 text-red-500 capitalize transition-colors duration-200 transform bg-red-100 rounded-full dark:bg-red-500 dark:text-white hover:underline hover:text-red-600 dark:hover:text-red-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>
            }
          </div>

          <div
            class="p-8 space-y-3 border-2 border-red-400 dark:border-red-300 rounded-xl"
          >
            <span class="inline-block text-red-500 dark:text-red-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </span>

            <h1
              class="text-2xl font-semibold text-gray-700 capitalize dark:text-white"
            >
              Assign your prize with a click
            </h1>

            <p class="text-gray-500 dark:text-gray-300">
              Using a realtime feature for the game, people will updated
              realtime when they win!
            </p>

            @if (false) {
              <a
                href="#"
                class="inline-flex p-2 text-red-500 capitalize transition-colors duration-200 transform bg-red-100 rounded-full dark:bg-red-500 dark:text-white hover:underline hover:text-red-600 dark:hover:text-red-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class CardsComponent {}
