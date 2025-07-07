import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  heroBanknotes,
  heroClock,
  heroGlobeAlt,
  heroTrophy,
} from '@ng-icons/heroicons/outline';

interface OverviewCard {
  icon: string;
  iconBg: string;
  iconBgHover: string;
  title: string;
  description: string;
}

const OVERVIEW_CARDS: OverviewCard[] = [
  {
    icon: 'heroBanknotes',
    iconBg: 'bg-primary-100',
    iconBgHover: 'bg-primary-600',
    title: 'Unique Ticket System',
    description:
      'Automatic ticket assignment for all participants with customizable number ranges and special tickets.',
  },
  {
    icon: 'heroClock',
    iconBg: 'bg-secondary-100',
    iconBgHover: 'bg-secondary-500',
    title: 'Real-Time Spinning',
    description:
      'Engaging visual spinning mechanism that creates suspense and excitement for all participants.',
  },
  {
    icon: 'heroGlobeAlt',
    iconBg: 'bg-accent-100',
    iconBgHover: 'bg-accent-400',
    title: 'Versatile Events',
    description:
      'Perfect for both online streaming and in-person events with specialized features for each format.',
  },
  {
    icon: 'heroTrophy',
    iconBg: 'bg-success-50',
    iconBgHover: 'bg-success-500',
    title: 'Prize Management',
    description:
      'Comprehensive prize allocation and distribution system with verification and claiming processes.',
  },
];

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [RouterModule, NgIcon, CommonModule],
  providers: [
    provideIcons({
      heroBanknotes,
      heroClock,
      heroGlobeAlt,
      heroTrophy,
    }),
  ],
  template: `
    <section id="overview" class="section bg-white">
      <div class="container">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="mb-6">
            Revolutionizing <span class="gradient-text">Lucky Draws</span>
          </h2>
          <p class="text-gray-600 text-lg">
            Estrai.me provides a complete platform for creating, managing, and
            running exciting lucky spin events that keep participants engaged
            and excited.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          @for (card of cards; track card.title) {
            <div class="card hover:shadow-xl group">
              <div
                class="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 {{
                  card.iconBg
                }}"
                [ngClass]="{
                  'group-hover:bg-primary-600':
                    card.iconBgHover === 'bg-primary-600',
                  'group-hover:bg-secondary-500':
                    card.iconBgHover === 'bg-secondary-500',
                  'group-hover:bg-accent-400':
                    card.iconBgHover === 'bg-accent-400',
                  'group-hover:bg-success-500':
                    card.iconBgHover === 'bg-success-500',
                }"
              >
                <ng-icon [name]="card.icon" size="32"></ng-icon>
              </div>
              <h3 class="text-xl font-semibold mb-3">{{ card.title }}</h3>
              <p class="text-gray-600">
                {{ card.description }}
              </p>
            </div>
          }
        </div>

        <div class="mt-16 text-center">
          <a
            [routerLink]="['/game']"
            routerLinkActive="router-link-active"
            class="btn-primary"
          >
            Start Your First Event
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class OverviewComponent {
  cards = OVERVIEW_CARDS;
}
