import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ToggleService } from '../../services/open-nav.service';
import { UserService } from '@data-access';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, NgOptimizedImage],
  providers: [ToggleService, UserService],
  template: `
    <header class="relative bg-primary-800 text-white">
      <nav class="absolute top-0 left-0 right-0 z-10 py-6">
        <div class="container flex items-center justify-between">
          <div class="flex items-center min-w-md gap-2">
            <img src="assets/estrai.me-white.svg" alt="Logo" width="250" />
          </div>

          <div class="hidden md:flex items-center gap-8">
            <a
              href="#overview"
              class="text-white hover:text-accent-200 transition-colors"
              >Overview</a
            >
            <a
              href="#how-it-works"
              class="text-white hover:text-accent-200 transition-colors"
              >How It Works</a
            >
            <a
              href="#event-management"
              class="text-white hover:text-accent-200 transition-colors"
              >Event Management</a
            >
            <a
              href="#admin-panel"
              class="text-white hover:text-accent-200 transition-colors"
              >Admin Panel</a
            >
            <a
              href="#faq"
              class="text-white hover:text-accent-200 transition-colors"
              >FAQ</a
            >
          </div>

          <div class="flex items-center gap-4">
            @if (userService.userData; as user) {
              <div>
                <a routerLink="/profile">
                  <img
                    src="{{ user.photoURL }}"
                    alt="profile image"
                    class="w-12 rounded-full"
                  />
                </a>
              </div>
            } @else {
              <a
                href="#login"
                class="hidden md:flex items-center gap-2 text-white hover:text-accent-200 transition-colors"
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
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>

                <span>Log In</span>
              </a>
              <a href="#signup" class="btn-accent">Sign Up Free</a>
            }
            <button class="md:hidden text-white">
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
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  `,
  styles: [],
})
export class HeaderComponent {
  constructor(
    public toggleService: ToggleService,
    public router: Router,
    public userService: UserService,
  ) {}
}
