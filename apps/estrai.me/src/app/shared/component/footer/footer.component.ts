import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  template: `
    <footer class="bg-gray-900 text-white pt-16 pb-8">
      <div class="container">
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12"
        >
          <div>
            <div class="flex items-center gap-2 mb-6">
              <span class="text-2xl font-bold"
                ><img src="assets/estrai.me-white.svg" alt="Logo" width="250"
              /></span>
            </div>
            <p class="text-gray-400 mb-6">
              The ultimate platform for creating exciting lucky spin experiences
              for both online and in-person events.
            </p>
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-6">Quick Links</h3>
            <ul class="space-y-3">
              <li>
                <a
                  href="#overview"
                  class="text-gray-400 hover:text-white transition-colors"
                  >Game Overview</a
                >
              </li>
              <li>
                <a
                  href="#how-it-works"
                  class="text-gray-400 hover:text-white transition-colors"
                  >How It Works</a
                >
              </li>
              <li>
                <a
                  href="#event-management"
                  class="text-gray-400 hover:text-white transition-colors"
                  >Event Management</a
                >
              </li>
              <li>
                <a
                  href="#admin-panel"
                  class="text-gray-400 hover:text-white transition-colors"
                  >Admin Panel</a
                >
              </li>
              <li>
                <a
                  href="#faq"
                  class="text-gray-400 hover:text-white transition-colors"
                  >FAQ</a
                >
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-6">Contact Us</h3>
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <a
                  class="underline hover:text-primary-gray-20"
                  href="https://www.linkedin.com/in/lucianomurruni/"
                  target="_blank"
                >
                  <svg
                    class="w-10 h-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                    ></path>
                  </svg>
                </a>
              </li>

              <li class="flex items-start gap-3">
                <a
                  aria-current="page"
                  href="https://github.com/lucianomurr/angular-estrai.me/graphs/contributors"
                  target="_blank"
                  class="hover:text-gray-700 dark:hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
                    viewBox="0 0 1792 1792"
                  >
                    <path
                      d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          class="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
        >
          <p class="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {{ this.year }} Estrai.me. All rights reserved.
          </p>
          <div class="flex gap-6">
            <a
              href="#terms"
              class="text-gray-500 text-sm hover:text-white transition-colors"
              >Terms of Service</a
            >
            <a
              href="#privacy"
              class="text-gray-500 text-sm hover:text-white transition-colors"
              >Privacy Policy</a
            >
            <a
              href="#cookies"
              class="text-gray-500 text-sm hover:text-white transition-colors"
              >Cookie Policy</a
            >
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [],
})
export class FooterComponent {
  public year: number;

  constructor() {
    this.year = new Date().getFullYear();
  }
}
