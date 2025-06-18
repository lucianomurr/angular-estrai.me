import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  matCoffee,
  matFavorite,
  matCardGiftcard,
} from '@ng-icons/material-icons/baseline';

interface SupportCard {
  icon: string;
  iconBg: string;
  iconBgHover: string;
  title: string;
  description: string;
  btnClass: string;
  btnLabel: string;
  link: string;
}

const SUPPORT_CARDS: SupportCard[] = [
  {
    icon: 'matCoffee',
    iconBg: 'bg-primary-100',
    iconBgHover: 'group-hover:bg-primary-600',
    title: 'Buy Me a Coffee',
    description:
      'Support our daily development efforts with a coffee. Every cup helps us stay focused and motivated!',
    btnClass: 'btn-primary w-full justify-center',
    btnLabel: 'Buy a Coffee',
    link: 'https://coff.ee/lucianomure',
  },
  {
    icon: 'matFavorite',
    iconBg: 'bg-secondary-100',
    iconBgHover: 'group-hover:bg-secondary-500',
    title: 'Become a Sponsor',
    description:
      'Support long-term development and get exclusive benefits as an official sponsor',
    btnClass: 'btn-secondary w-full justify-center',
    btnLabel: 'Sponsor Us',
    link: 'https://github.com/lucianomurr/angular-estrai.me',
  },
  {
    icon: 'matCardGiftcard',
    iconBg: 'bg-accent-100',
    iconBgHover: 'group-hover:bg-accent-400',
    title: 'One-time Donation',
    description:
      'Make a one-time contribution to help us reach our development goals',
    btnClass: 'btn-accent w-full justify-center',
    btnLabel: 'Make a Donation',
    link: 'https://coff.ee/lucianomure',
  },
];

@Component({
  selector: 'app-support-me',
  standalone: true,
  imports: [NgIcon, CommonModule],
  providers: [
    provideIcons({
      matCardGiftcard,
      matCoffee,
      matFavorite,
    }),
  ],
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
          @for (card of cards; track card.title) {
            <div class="card hover:shadow-xl text-center group">
              <div
                class="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6 transition-colors duration-300 {{
                  card.iconBg
                }}"
                [ngClass]="card.iconBgHover"
              >
                <ng-icon [name]="card.icon" size="32"></ng-icon>
              </div>
              <h3 class="text-xl font-semibold mb-4">{{ card.title }}</h3>
              <p class="text-gray-600 mb-6">
                {{ card.description }}
              </p>
              <a
                [href]="card.link"
                target="_blank"
                rel="noopener noreferrer"
                [ngClass]="card.btnClass"
              >
                {{ card.btnLabel }}
              </a>
            </div>
          }
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
export class SupportMeComponent {
  cards = SUPPORT_CARDS;
}
