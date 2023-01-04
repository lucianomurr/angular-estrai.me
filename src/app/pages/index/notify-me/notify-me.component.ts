import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notify-me',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="px-6 py-6 mt-6 bg-red-700 dark:bg-gray-800 md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
      <div class="xl:w-0 xl:flex-1">
        <h2 class="text-2xl font-extrabold leading-8 tracking-tight text-white sm:text-3xl sm:leading-9">
          Receive alert about new commit or pull request on your github
        </h2>
        <p class="max-w-3xl mt-3 text-lg leading-6 text-red-200">
          No account or email required. We use push notifications. You can choose between several modes and define your
          own alert threshold.
        </p>
      </div>
      <div class="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
        <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
          <button
            class="flex items-center justify-center w-full px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-red-500 border border-transparent rounded-md hover:bg-red-400 focus:outline-none focus:bg-red-400">
            Notify me
          </button>
        </div>
        <p class="mt-3 text-sm leading-5 text-red-200">
          We care about the protection of your data. Your data is safe and never used for commercial purposes.
        </p>
        <p class="text-sm leading-5 text-red-200">
          In order to receive the notifications, you must give permission sufficient to your web browser.
        </p>
      </div>
    </div>
  `,
  styles: [],
})
export class NotifyMeComponent {}
