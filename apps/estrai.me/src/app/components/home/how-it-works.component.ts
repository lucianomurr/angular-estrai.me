import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  heroArrowRightOnRectangle,
  heroBellAlert,
  heroClock,
  heroGift,
} from '@ng-icons/heroicons/outline';

interface HowItWorksStep {
  icon: string;
  title: string;
  description: string;
  highlight: string;
}

const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    icon: 'heroArrowRightOnRectangle',
    title: 'Sign In',
    description:
      'Create an account or log in with your existing credentials to get started',
    highlight: 'Your tickets are automatically assigned to your account',
  },
  {
    icon: 'heroClock',
    title: 'Join Waiting Room',
    description:
      "Enter the event waiting room where you'll see your assigned ticket numbers",
    highlight: 'Watch the participant count grow as others join',
  },
  {
    icon: 'heroBellAlert',
    title: 'Game Start',
    description:
      'Receive notification when the event begins and watch the spinning wheel in real-time',
    highlight: 'Experience the excitement as the wheel slows down',
  },
  {
    icon: 'heroGift',
    title: 'Claim Prizes',
    description:
      'Winners are notified immediately with clear instructions on how to claim prizes',
    highlight: 'Verification process ensures fair and transparent results',
  },
];

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [NgIcon],
  providers: [
    provideIcons({
      heroArrowRightOnRectangle,
      heroBellAlert,
      heroClock,
      heroGift,
    }),
  ],
  template: `
    <section id="how-it-works" class="section bg-gray-50">
      <div class="container">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="mb-6">How It <span class="gradient-text">Works</span></h2>
          <p class="text-gray-600 text-lg">
            Estrai.me makes participating in lucky spin events simple and
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
            @for (step of steps; track step.icon; let i = $index) {
              <div class="card hover:shadow-xl relative">
                <div
                  class="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-xl font-bold"
                >
                  {{ i + 1 }}
                </div>
                <div class="pt-8 text-center">
                  <div class="flex justify-center mb-6">
                    <div
                      class="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center"
                    >
                      <ng-icon [name]="step.icon" size="32"></ng-icon>
                    </div>
                  </div>
                  <h3 class="text-xl font-semibold mb-3">{{ step.title }}</h3>
                  <p class="text-gray-600">
                    {{ step.description }}
                  </p>
                  <div class="mt-6 p-4 bg-primary-50 rounded-lg">
                    <p class="text-sm text-primary-700">
                      {{ step.highlight }}
                    </p>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class HowItWorksComponent {
  steps = HOW_IT_WORKS_STEPS;
}
