import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer
      class="px-3 py-8 text-gray-500 transition-colors duration-200 bg-white dark:bg-gray-800 text-2 dark:text-gray-200 pt-20 pb-24">
      <div class="flex flex-col">
        <div class="h-px mx-auto rounded-full md:hidden mt-7 w-11"></div>
        <div class="flex flex-col mt-4 md:mt-0 md:flex-row">
          <nav
            class="flex flex-col items-center justify-center flex-1 border-gray-100 md:items-end md:border-r md:pr-5">
            <a
              aria-current="page"
              [routerLink]="['/about']"
              routerLinkActive="router-link-active"
              class="hover:text-gray-700 dark:hover:text-white">
              About
            </a>
            <a aria-current="page" href="#" class="hover:text-gray-700 dark:hover:text-white"> Privacy/Policy </a>
            <a
              aria-current="page"
              href="https://github.com/lucianomurr/angular-estrai.me/issues"
              target="_blank"
              class="hover:text-gray-700 dark:hover:text-white">
              Contributors
            </a>
          </nav>
          <div class="h-px mx-auto mt-4 rounded-full md:hidden w-11"></div>
          <div class="flex items-center justify-center flex-1 mt-4 border-gray-100 md:mt-0 md:border-r">
            <a class="hover:text-primary-gray-20" href="https://github.com/lucianomurr/angular-estrai.me">
              <span class="sr-only"> View on GitHub </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
                viewBox="0 0 1792 1792">
                <path
                  d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
              </svg>
            </a>
          </div>
          <div class="h-px mx-auto mt-4 rounded-full md:hidden w-11 "></div>
          <div class="flex flex-col items-center justify-center flex-1 mt-7 md:mt-0 md:items-start md:pl-5">
            <span class=""> © 2022 </span>
            <span class="mt-7 md:mt-1">
              Created by
              <a
                class="underline hover:text-primary-gray-20"
                href="https://www.linkedin.com/in/lucianomurruni/"
                target="_blank">
                Luciano Murruni
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [],
})
export class FooterComponent {}
