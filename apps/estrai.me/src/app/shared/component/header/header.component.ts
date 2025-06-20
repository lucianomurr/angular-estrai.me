import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ToggleService } from '../../services/open-nav.service';
import { UserService } from '@data-access';
import { MobileSidenavComponent } from './mobile-sidenav.component';
import { MENU_ITEMS } from './header-menu-const';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matMenu, matClose } from '@ng-icons/material-icons/baseline';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule, MobileSidenavComponent, NgIcon],
  providers: [ToggleService, UserService, provideIcons({ matMenu, matClose })],
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
                <h1 class="text-3xl font-bold text-white">ESTRAI.ME</h1>
              } @else {
                <h1 class="text-3xl font-bold gradient-text">ESTRAI.ME</h1>
              }
            </a>
          </div>

          <div class="hidden md:flex items-center gap-8">
            @if (isHome()) {
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
                <ng-icon name="matMenu" size="24" />
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
                <ng-icon name="matClose" size="24" />
              </button>
            }
          </div>
        </div>
      </nav>
    </header>
    @if (isMobileMenuOpen) {
      <app-mobile-sidenav
        class="absolute top-20 left-0 right-0 bg-white shadow-lg border-t z-50"
        (CloseSidenavEvent)="toggleService.updateData(!isMobileMenuOpen)"
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
export class HeaderComponent implements OnInit {
  toggleService = inject(ToggleService);
  private router = inject(Router);
  userService = inject(UserService);

  public menuItems = MENU_ITEMS;

  public isMobileMenuOpen = false;

  ngOnInit() {
    // subscribe to toggleService to get the current state of the sidenav
    this.toggleService.sidenav$.subscribe((isOpen) => {
      this.isMobileMenuOpen = isOpen;
    });
  }

  onCloseSidenav() {
    console.log('onCloseSidenav');
    this.toggleService.updateData(!this.isMobileMenuOpen);
  }

  isHome() {
    return this.router.url === '/' || this.router.url.includes('/home')
      ? true
      : false;
  }
}
