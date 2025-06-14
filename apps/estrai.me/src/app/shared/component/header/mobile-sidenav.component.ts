import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router, RouterModule } from '@angular/router';
import { AuthService, UserService } from '@data-access';
import { MENU_ITEMS } from './header-menu-const';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  heroPlusCircle,
  heroUserCircle,
  heroPlayCircle,
  heroBell,
  heroCog6Tooth,
  heroArrowLeftOnRectangle,
} from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-mobile-sidenav',
  standalone: true,
  imports: [CommonModule, RouterModule, NgIcon],
  providers: [
    AuthService,
    provideIcons({
      heroPlusCircle,
      heroUserCircle,
      heroPlayCircle,
      heroBell,
      heroCog6Tooth,
      heroArrowLeftOnRectangle,
    }),
  ],
  template: `
    <div class="px-4 py-6 space-y-4">
      @if (userService.userData; as user) {
        <div class="flex items-center gap-3 pb-4 border-b border-gray-200">
          <img
            class="h-12 w-12 rounded-full"
            [src]="user.photoURL"
            [alt]="user.displayName"
          />
          <div>
            <p class="font-semibold text-gray-900">{{ user.displayName }}</p>
            <p class="text-sm text-gray-600">{{ user.email }}</p>
          </div>
        </div>

        <!-- quick actions -->
        <div class="space-y-3">
          <h3
            class="text-sm font-medium text-gray-500 uppercase tracking-wider"
          >
            Quick Actions
          </h3>

          <a
            routerLink="/new-game"
            class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div
              class="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center"
            >
              <ng-icon
                name="heroPlusCircle"
                class="text-white"
                size="24"
              ></ng-icon>
            </div>
            <div>
              <p class="font-medium text-gray-900">Create New Game</p>
              <p class="text-sm text-gray-600">Start a new lucky spin event</p>
            </div>
          </a>

          <a
            routerLink="/my-games"
            class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div
              class="w-10 h-10 rounded-full bg-secondary-600 flex items-center justify-center"
            >
              <ng-icon
                name="heroUserCircle"
                class="text-white"
                size="24"
              ></ng-icon>
            </div>
            <div>
              <p class="font-medium text-gray-900">My Games</p>
              <p class="text-sm text-gray-600">View and manage games</p>
            </div>
          </a>

          <a
            routerLink="/profile"
            class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div
              class="w-10 h-10 rounded-full bg-accent-600 flex items-center justify-center"
            >
              <ng-icon
                name="heroPlayCircle"
                class="text-white"
                size="24"
              ></ng-icon>
            </div>
            <div>
              <p class="font-medium text-gray-900">Active Game</p>
              <p class="text-sm text-gray-600">Resume current game</p>
            </div>
          </a>
        </div>
        <!-- end quick actions -->

        <!-- menu items -->
        <div class="space-y-3 pt-4 border-t border-gray-200">
          <h3
            class="text-sm font-medium text-gray-500 uppercase tracking-wider"
          >
            Menu
          </h3>

          <a
            routerLink="/"
            (click)="onClickCloseSidenav()"
            class="flex items-center gap-3 p-3 text-black rounded-lg hover:bg-gray-50 transition-colors"
          >
            <ng-icon name="heroBell" size="24"></ng-icon>
            <span class="font-medium text-gray-900">Notifications</span>
            <span
              class="ml-auto bg-primary-600 text-white text-xs rounded-full px-2 py-1"
              >3</span
            >
          </a>

          <a
            routerLink="/my-games"
            (click)="onClickCloseSidenav()"
            class="flex items-center gap-3 p-3 rounded-lg text-black hover:bg-gray-50 transition-colors"
          >
            <ng-icon name="heroUserCircle" size="24"></ng-icon>
            <span class="font-medium text-gray-900">Profile</span>
          </a>

          <a
            routerLink="/settings"
            (click)="onClickCloseSidenav()"
            class="flex items-center gap-3 p-3 rounded-lg text-black hover:bg-gray-50 transition-colors"
          >
            <ng-icon name="heroCog6Tooth" size="24"></ng-icon>
            <span class="font-medium text-gray-900">Settings</span>
          </a>

          <button
            (click)="onClickLogout()"
            class="flex items-center gap-3 p-3 rounded-lg text-accent-600 hover:bg-gray-50 transition-colors w-full text-left"
          >
            <ng-icon name="heroArrowLeftOnRectangle" size="24"></ng-icon>
            <span class="font-medium text-accent-600">Sign Out</span>
          </button>
        </div>
      } @else {
        @for (item of menuItems; track item.label) {
          <a
            [routerLink]="item.RouterLink"
            [fragment]="item.fragment"
            (click)="onClickCloseSidenav()"
            class="flex items-center gap-3 p-3 rounded-lg text-black hover:bg-gray-50 transition-colors"
          >
            <span class="font-medium text-gray-900">{{ item.label }}</span>
          </a>
        }
      }
    </div>
  `,
  styles: [],
})
export class MobileSidenavComponent {
  public menuItems = MENU_ITEMS;

  @Output() CloseSidenavEvent = new EventEmitter();

  constructor(
    public auth: AngularFireAuth,
    private authService: AuthService,
    public userService: UserService,
    private router: Router,
  ) {}

  onClickCloseSidenav() {
    console.log('onClickCloseSidenav');
    this.CloseSidenavEvent.emit();
  }

  onClickLogout() {
    this.authService.logout();
    this.router.navigateByUrl('/');
    this.CloseSidenavEvent.emit();
  }
}
