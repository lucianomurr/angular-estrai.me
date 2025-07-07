import { Component, OnInit, inject } from '@angular/core';

import { Router, RouterModule } from '@angular/router';
import { AuthService, UserService } from '@data-access';
import { ProfileService } from '../../../data-access/src/lib/data-access/profile.service';
import { User } from 'firebase/auth';
import { take } from 'rxjs';
import { CommonModule } from '@angular/common';

import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  matArrowBack,
  matCalendarToday,
  matExitToApp,
  matMail,
} from '@ng-icons/material-icons/baseline';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterModule, CommonModule, RouterModule, NgIcon],
  providers: [
    ProfileService,
    UserService,
    provideIcons({ matArrowBack, matExitToApp, matCalendarToday, matMail }),
  ],
  template: `
    <header class="bg-white shadow-sm">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4">
            <a
              routerLink="/"
              class="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ng-icon name="matArrowBack" size="20" />
              <span>Back to Dashboard</span>
            </a>
            <div class="h-6 w-px bg-gray-300"></div>
            <h1 class="text-2xl font-bold">Profile</h1>
          </div>

          <button
            (click)="onClickLogout()"
            class="flex items-center gap-2 px-4 py-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-lg transition-colors"
          >
            <ng-icon name="matExitToApp" size="20" />
            <span class="hidden sm:inline">Sign Out</span>
          </button>
        </div>
      </div>
    </header>

    <main class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        @if (userService.userData; as user) {
          <div class="card">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-xl font-semibold">User Information</h2>
              <button
                class="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              ></button>
            </div>

            <div class="text-center mb-6">
              <div class="relative inline-block">
                <img
                  [src]="user.photoURL"
                  [alt]="user.displayName"
                  class="w-24 h-24 rounded-full object-cover mx-auto border-4 border-white shadow-lg"
                />

                <div
                  class="absolute top-0 right-0 w-6 h-6 bg-green-500 border-2 border-white rounded-full"
                ></div>
              </div>
            </div>

            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >Full Name</label
                >

                <p class="text-gray-900 font-medium">
                  {{ user.displayName }}
                </p>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >Email Address</label
                >
                <div class="flex items-center gap-2">
                  <ng-icon name="matMail" size="20" />
                  <span class="text-gray-900">{{ user.email }}</span>
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >Date Joined</label
                >
                <div class="flex items-center gap-2">
                  <ng-icon name="matCalendarToday" size="20" />
                  <span class="text-gray-900">
                    {{ user.metadata.creationTime | date: 'mediumDate' }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </main>
  `,
  styles: [],
})
export class ProfileComponent implements OnInit {
  private router = inject(Router);

  private profileService = inject(ProfileService);
  private authService = inject(AuthService);
  public userService = inject(UserService);

  games: number = 0;
  disabledLogoutBtn: boolean;

  ngOnInit() {
    this.disabledLogoutBtn = false;
    const user = this.userService.getCurrentUser();

    user.pipe(take(1)).subscribe((user) => {
      if (user) {
        console.log('ProfileComponent,ngOnInit', user);
        this.updateUserTotalGames(user);
      }
    });
  }

  async updateUserTotalGames(user: User) {
    console.log('updateUserTotalGames');
    this.games = await this.profileService.GetUserCreatedGames(user);
  }

  async onClickLogout() {
    this.disabledLogoutBtn = true;
    await this.authService.logout();
    this.router.navigate(['/']);
  }
}
