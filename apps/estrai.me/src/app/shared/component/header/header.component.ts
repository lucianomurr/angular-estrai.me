import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { ToggleService } from '../../services/open-nav.service';
import { UserService } from '@data-access';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, NgOptimizedImage, CommonModule],
  providers: [ToggleService, UserService],
  template: `
    <header
      class="relative text-white"
      [ngClass]="{ 'bg-primary-800': isHome(), 'bg-white': !isHome() }"
    >
      <nav class="absolute top-0 left-0 right-0 z-10 py-6">
        <div class="container flex items-center justify-between">
          <div class="flex items-center min-w-md gap-2">
            <a [routerLink]="'/'">
              @if (isHome()) {
                <img
                  ngSrc="assets/estrai.me-white.svg"
                  alt="Logo"
                  width="228"
                  height="41"
                />
              } @else {
                <img
                  ngSrc="assets/estrai.me-v2.svg"
                  alt="Logo"
                  width="228"
                  height="41"
                />
              }
            </a>
          </div>

          <div class="hidden md:flex items-center gap-8">
            @for (item of menuItems; track item.label) {
              <a
                [routerLink]="item.RouterLink"
                [fragment]="item.fragment"
                class=" transition-colors"
                [ngClass]="{
                  'text-white hover:text-accent-200': isHome(),
                  'text-black hover:text-accent-800': !isHome(),
                }"
                >{{ item.label }}</a
              >
            }
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
              <a routerLink="/auth" class="btn-accent">Sign Up Free</a>
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
  public menuItems = [
    {
      label: 'Overview',
      RouterLink: '/',
      fragment: '#overview',
    },
    {
      label: 'How It Works',
      RouterLink: '/',
      fragment: '#how-it-works',
    },
    {
      label: 'Admin Panel',
      RouterLink: '/',
      fragment: '#admin-panel',
    },
    {
      label: 'Support',
      RouterLink: '/',
      fragment: '#support',
    },
  ];

  constructor(
    public toggleService: ToggleService,
    private router: Router,
    public userService: UserService,
  ) {}

  isHome() {
    console.log(this.router.url);
    console.log(this.router.url === '/');
    return this.router.url === '/' || this.router.url.includes('/home')
      ? true
      : false;
  }
}
