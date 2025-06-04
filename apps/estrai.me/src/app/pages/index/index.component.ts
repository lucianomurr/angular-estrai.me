import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { NotifyMeComponent } from './notify-me/notify-me.component';
import { UserService } from '@data-access';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [RouterModule, CardsComponent, NotifyMeComponent, NgOptimizedImage],
  providers: [UserService],
  template: `
    <div
      class="relative min-h-screen flex items-center bg-gradient-to-br from-primary-800 via-primary-700 to-secondary-700 overflow-hidden"
    >
      <div class="absolute inset-0 overflow-hidden opacity-10">
        <div
          class="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-accent-400 animate-pulse-slow"
        ></div>
        <div
          class="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-secondary-400 animate-pulse-slow"
        ></div>
        <div
          class="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-primary-400 animate-pulse-slow"
        ></div>
      </div>

      <div
        class="container relative z-10 flex flex-col md:flex-row items-center pt-20"
      >
        <div class="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
          <h1 class="text-white mb-6">
            The Ultimate
            <span class="text-accent-300">Lottery Draw</span> Experience
          </h1>
          <p
            class="text-primary-100 text-lg md:text-xl mb-8 max-w-lg mx-auto md:mx-0"
          >
            Create exciting lottery draw events with real-time spinning wheels
            for both online streaming and in-person events.
          </p>
          <div
            class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <a
              [routerLink]="['/game']"
              routerLinkActive="router-link-active"
              class="btn-accent"
            >
              Get Started Free
            </a>
            <a
              href="#how-it-works"
              class="btn-outline text-white border-white hover:bg-white/10"
            >
              How It Works
            </a>
          </div>
        </div>

        <div class="md:w-1/2 flex justify-center">
          <div class="relative spin-container w-72 h-72 md:w-96 md:h-96">
            <div
              class="spinning-wheel absolute inset-0 rounded-full bg-gradient-to-r from-accent-400 to-secondary-500 animate-spin-slow shadow-xl"
            >
              <div
                class="absolute inset-4 rounded-full bg-primary-700 flex items-center justify-center"
              >
                <div class="text-center">
                  <div class="text-white text-4xl font-bold mb-2">WIN!</div>
                  <div class="text-accent-300 text-xl">Spin Now</div>
                </div>
              </div>

              @for (_ of [].constructor(12); track $index) {
                <div
                  class="absolute top-0 left-1/2 w-1 h-1/2 -ml-0.5 origin-bottom"
                  [style.transform]="'rotate(' + $index * 30 + 'deg)'"
                >
                  <div class="w-4 h-4 -ml-1.5 rounded-full bg-white"></div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>

      <div class="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          class="w-full h-16 md:h-24"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="white"
          ></path>
        </svg>
      </div>
    </div>

    <app-cards />
    <app-notify-me />
  `,
  styles: [],
})
export class IndexComponent {
  public userService = inject(UserService);
}
