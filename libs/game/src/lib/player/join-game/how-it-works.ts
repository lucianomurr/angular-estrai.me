import { Component } from '@angular/core';

@Component({
  selector: 'app-how-it-work',
  standalone: true,
  template: `
    <section id="how-it-works" class="section bg-gray-50">
      <div class="container">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="mb-6">How It <span class="gradient-text">Works</span></h2>
          <p class="text-gray-600 text-lg">
            Estrai.me makes participating in lucky extraction events simple and
            exciting with our streamlined process
          </p>
        </div>

        <div class="relative">
          <div
            class="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-primary-200 -translate-y-1/2 z-0"
          ></div>

          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10"
          >
            <div class="card hover:shadow-xl relative">
              <div
                class="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-xl font-bold"
              >
                1
              </div>
              <div class="pt-8 text-center">
                <div class="flex justify-center mb-6">
                  <div
                    class="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center"
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
                        d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
                      />
                    </svg>
                  </div>
                </div>
                <h3 class="text-xl font-semibold mb-3">Sign In</h3>
                <p class="text-gray-600">
                  Create an account or log in with your existing credentials to
                  get started
                </p>
                <div class="mt-6 p-4 bg-primary-50 rounded-lg">
                  <p class="text-sm text-primary-700">
                    Your tickets are automatically assigned to your account
                  </p>
                </div>
              </div>
            </div>

            <div class="card hover:shadow-xl relative">
              <div
                class="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-xl font-bold"
              >
                2
              </div>
              <div class="pt-8 text-center">
                <div class="flex justify-center mb-6">
                  <div
                    class="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center"
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
                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 class="text-xl font-semibold mb-3">Join Waiting Room</h3>
                <p class="text-gray-600">
                  Enter the event waiting room where you'll see your assigned
                  ticket numbers
                </p>
                <div class="mt-6 p-4 bg-primary-50 rounded-lg">
                  <p class="text-sm text-primary-700">
                    Watch the participant count grow as others join
                  </p>
                </div>
              </div>
            </div>

            <div class="card hover:shadow-xl relative">
              <div
                class="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-xl font-bold"
              >
                3
              </div>
              <div class="pt-8 text-center">
                <div class="flex justify-center mb-6">
                  <div
                    class="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center"
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
                        d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
                      />
                    </svg>
                  </div>
                </div>
                <h3 class="text-xl font-semibold mb-3">Game Start</h3>
                <p class="text-gray-600">
                  Receive notification when the event begins and watch the
                  spinning wheel in real-time
                </p>
                <div class="mt-6 p-4 bg-primary-50 rounded-lg">
                  <p class="text-sm text-primary-700">
                    Experience the excitement as the wheel slows down
                  </p>
                </div>
              </div>
            </div>

            <div class="card hover:shadow-xl relative">
              <div
                class="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-xl font-bold"
              >
                4
              </div>
              <div class="pt-8 text-center">
                <div class="flex justify-center mb-6">
                  <div
                    class="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center"
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
                        d="M12 3.75v16.5M2.25 12h19.5M6.375 17.25a4.875 4.875 0 0 0 4.875-4.875V12m6.375 5.25a4.875 4.875 0 0 1-4.875-4.875V12m-9 8.25h16.5a1.5 1.5 0 0 0 1.5-1.5V5.25a1.5 1.5 0 0 0-1.5-1.5H3.75a1.5 1.5 0 0 0-1.5 1.5v13.5a1.5 1.5 0 0 0 1.5 1.5Zm12.621-9.44c-1.409 1.41-4.242 1.061-4.242 1.061s-.349-2.833 1.06-4.242a2.25 2.25 0 0 1 3.182 3.182ZM10.773 7.63c1.409 1.409 1.06 4.242 1.06 4.242S9 12.22 7.592 10.811a2.25 2.25 0 1 1 3.182-3.182Z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 class="text-xl font-semibold mb-3">Claim Prizes</h3>
                <p class="text-gray-600">
                  Winners are notified immediately! Contact the game admin for
                  the instruction on how to claim your prize!
                </p>
                <div class="mt-6 p-4 bg-primary-50 rounded-lg">
                  <p class="text-sm text-primary-700">
                    Verification process ensures fair and transparent results
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class HowItWorksComponent {}
