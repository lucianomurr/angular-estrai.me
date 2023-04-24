import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '@auth';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div
      class="w-full relative z-10 flex items-center overflow-hidden bg-white dark:bg-gray-800"
      *ngIf="authService.auth.user | async as user">
      <div class="container relative flex px-2 py-16 mx-auto items-center flex-col">
        <div class="p-5">
          <div class="p-16 bg-white shadow mt-24 rounded-xl">
            <div class="relative mb-10">
              <div
                class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2x flex items-center justify-center text-indigo-500">
                <img src="{{ user.photoURL }}" alt="user profile image" class="rounded-full" />
              </div>
            </div>
            <div class="text-center pb-12">
              <h1 class="text-4xl font-medium text-gray-700">
                {{ user.displayName }}
              </h1>
            </div>
            <div class="text-center flex flex-row mb-20 gap-4 justify-around">
              <div>
                <p class="font-bold text-gray-700 text-xl">22</p>
                <p class="text-gray-400">Games</p>
              </div>
              <div>
                <p class="font-bold text-gray-700 text-xl">10</p>
                <p class="text-gray-400">Creation date</p>
              </div>
            </div>
            <div class="flex flex-col items-center">
              <button
                (click)="onClickLogout()"
                [disabled]="disabledLogoutBtn"
                class="flex flex-row items-center gap-2 px-4 py-2 text-white uppercase bg-neutral-600 border-2 border-transparent rounded-lg text-md hover:bg-neutral-800 disabled:opacity-30 disabled:bg-neutral-600 disabled:cursor-not-allowed">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current text-white">
                    <path
                      d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                    <rect width="32" height="64" x="256" y="232"></rect>
                  </svg>
                </span>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class ProfileComponent {
  disabledLogoutBtn: boolean;

  constructor(public authService: AuthService, private router: Router) {
    this.disabledLogoutBtn = false;
  }

  async onClickLogout() {
    this.disabledLogoutBtn = true;
    await this.authService.auth.signOut();
    this.router.navigate(['/']);
  }
}
