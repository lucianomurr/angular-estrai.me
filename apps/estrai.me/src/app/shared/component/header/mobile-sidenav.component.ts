import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { RouterModule } from '@angular/router';
import { AuthService, UserService } from '@data-access';
import { MENU_ITEMS } from './header-menu-const';

@Component({
  selector: 'app-mobile-sidenav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  providers: [AuthService],
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
            routera="/new-game"
            class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div
              class="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center"
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
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
            <div>
              <p class="font-medium text-gray-900">Create New Game</p>
              <p class="text-sm text-gray-600">Start a new lucky spin event</p>
            </div>
          </a>

          <a
            routera="/my-games"
            class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div
              class="w-10 h-10 rounded-full bg-secondary-600 flex items-center justify-center"
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
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
            <div>
              <p class="font-medium text-gray-900">My Games</p>
              <p class="text-sm text-gray-600">View and manage games</p>
            </div>
          </a>

          <a
            routera="/profile"
            class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div
              class="w-10 h-10 rounded-full bg-accent-600 flex items-center justify-center"
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
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
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
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>

            <span class="font-medium text-gray-900">Profile</span>
          </a>

          <a
            routerLink="/settings"
            (click)="onClickCloseSidenav()"
            class="flex items-center gap-3 p-3 rounded-lg text-black hover:bg-gray-50 transition-colors"
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
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            <span className="font-medium text-gray-900">Settings</span>
          </a>

          <button
            (click)="onClickLogout()"
            class="flex items-center gap-3 p-3 rounded-lg text-accent-600 hover:bg-gray-50 transition-colors w-full text-left"
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
                d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
              />
            </svg>

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
            <span className="font-medium text-gray-900">{{ item.label }}</span>
          </a>
        }
      }
    </div>
  `,
  styles: [],
})
export class MobileSidenavComponent {
  // loggedUser: firebase.User | undefined | null;
  public menuItems = MENU_ITEMS;
  @Input() showSidebar: boolean | null = false;
  @Output() closeSidenav = new EventEmitter();

  constructor(
    public auth: AngularFireAuth,
    private authService: AuthService,
    public userService: UserService,
  ) {}

  onClickCloseSidenav() {
    this.closeSidenav.emit();
  }

  onClickLogout() {
    this.authService.logout();
    this.closeSidenav.emit();
  }
}
