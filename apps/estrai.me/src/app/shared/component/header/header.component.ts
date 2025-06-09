import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ToggleService } from '../../services/open-nav.service';
import { UserService } from '@data-access';
import { MobileSidenavComponent } from './mobile-sidenav.component';
import { MENU_ITEMS } from './header-menu-const';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule,
    NgOptimizedImage,
    CommonModule,
    MobileSidenavComponent,
  ],
  providers: [ToggleService, UserService],
  template: `
    <header
      class="relative text-white"
      [ngClass]="{ 'bg-primary-800': isHome(), 'bg-white': !isHome() }"
    >
      <nav class="absolute top-0 left-0 right-0 z-10 py-6">
        <div class="container flex items-center justify-between">
          <div class="flex items-center min-w-xs md:min-w-md gap-2">
            <a [routerLink]="'/'">
              @if (isHome()) {
                <img
                  ngSrc="assets/estrai.me-logo-white.svg"
                  alt="Logo"
                  width="228"
                  height="41"
                />
              } @else {
                <img
                  ngSrc="assets/estrai.me-logo-color.svg"
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
              <div class="hidden md:block">
                <a routerLink="/profile">
                  <img
                    src="{{ user.photoURL }}"
                    alt="profile image"
                    class="w-12 rounded-full"
                  />
                </a>
              </div>
            } @else {
              <a routerLink="/auth" class="hidden md-block btn-accent"
                >Sign Up Free</a
              >
            }

            @if (!isMobileMenuOpen) {
              <button
                class="md:hidden"
                (click)="toggleService.updateData(!isMobileMenuOpen)"
                aria-label="Open mobile menu"
                [ngClass]="{
                  'text-white': isHome(),
                  'text-black': !isHome(),
                }"
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
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            } @else {
              <button
                class="md:hidden"
                (click)="toggleService.updateData(!isMobileMenuOpen)"
                aria-label="Open mobile menu"
                [ngClass]="{
                  'text-white': isHome(),
                  'text-black': !isHome(),
                }"
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
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            }
          </div>
        </div>
      </nav>
    </header>
    @if (isMobileMenuOpen) {
      <app-mobile-sidenav
        class="absolute top-20 left-0 right-0 bg-white shadow-lg border-t z-50"
      />
    }
    @if (isMobileMenuOpen) {
      <div
        class="md:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
        (click)="toggleService.updateData(!isMobileMenuOpen)"
      ></div>
    }
  `,
  styles: [],
})
export class HeaderComponent {
  public menuItems = MENU_ITEMS;

  public isMobileMenuOpen = false;

  constructor(
    public toggleService: ToggleService,
    private router: Router,
    public userService: UserService,
  ) {
    // subscribe to toggleService to get the current state of the sidenav
    this.toggleService.sidenav$.subscribe((isOpen) => {
      this.isMobileMenuOpen = isOpen;
    });
  }

  isHome() {
    return this.router.url === '/' || this.router.url.includes('/home')
      ? true
      : false;
  }
}
