import { Component } from '@angular/core';

@Component({
  selector: 'app-support-me',
  standalone: true,
  imports: [],
  template: `
    <section id="support" class="section bg-white">
      <div class="container">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="mb-6">
            Support <span class="gradient-text">Our Project</span>
          </h2>
          <p class="text-gray-600 text-lg">
            Help us keep improving Estrai.me and creating amazing experiences
            for event organizers worldwide
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div class="card hover:shadow-xl text-center group">
            <div
              class="w-16 h-16 mx-auto rounded-full bg-primary-100 flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M10 2v2"></path>
                <path d="M14 2v2"></path>
                <path
                  d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"
                ></path>
                <path d="M6 2v2"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-4">Buy Me a Coffee</h3>
            <p class="text-gray-600 mb-6">
              Support our daily development efforts with a coffee. Every cup
              helps us stay focused and motivated!
            </p>
            <a
              href="https://www.buymeacoffee.com/estraime"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-primary w-full justify-center"
            >
              Buy a Coffee
            </a>
          </div>

          <div class="card hover:shadow-xl text-center group">
            <div
              class="w-16 h-16 mx-auto rounded-full bg-secondary-100 flex items-center justify-center mb-6 group-hover:bg-secondary-500 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-4">Become a Sponsor</h3>
            <p class="text-gray-600 mb-6">
              Support long-term development and get exclusive benefits as an
              official sponsor
            </p>
            <a
              href="https://github.com/sponsors/estraime"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-secondary w-full justify-center"
            >
              Sponsor Us
            </a>
          </div>

          <div class="card hover:shadow-xl text-center group">
            <div
              class="w-16 h-16 mx-auto rounded-full bg-accent-100 flex items-center justify-center mb-6 group-hover:bg-accent-400 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-4">One-time Donation</h3>
            <p class="text-gray-600 mb-6">
              Make a one-time contribution to help us reach our development
              goals
            </p>
            <a
              href="https://ko-fi.com/estraime"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-accent w-full justify-center"
            >
              Make a Donation
            </a>
          </div>
        </div>

        <div
          class="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12"
        >
          <div class="max-w-3xl mx-auto text-center">
            <h3 class="text-2xl font-semibold mb-6">Why Support Us?</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div class="card">
                <h4 class="font-semibold text-primary-600 mb-2">Open Source</h4>
                <p class="text-sm text-gray-600">
                  We believe in transparency and community collaboration. Your
                  support helps maintain and improve our open-source codebase.
                </p>
              </div>
              <div class="card">
                <h4 class="font-semibold text-secondary-500 mb-2">
                  Continuous Innovation
                </h4>
                <p class="text-sm text-gray-600">
                  Your support enables us to develop new features and improve
                  the platform based on community feedback.
                </p>
              </div>
            </div>
            <p class="text-gray-600 italic">
              "Together, we can make Estrai.me the best lucky spin platform for
              event organizers worldwide!"
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class SupportMeComponent {}
