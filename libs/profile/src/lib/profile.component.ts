import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from "@auth";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="w-full relative z-10 flex items-center overflow-hidden bg-white dark:bg-gray-800" *ngIf="authService.auth.user | async as user">
      <div class="container relative flex px-2 py-16 mx-auto items-center flex-col">
        <div class="p-5">
          <div class="p-16 bg-white shadow mt-24">
            <div class="relative mb-10">
                <div
                    class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2x flex items-center justify-center text-indigo-500">
                    <img src="{{user.photoURL}}" alt="user profile image" class="rounded-full">
                </div>
            </div>
            <div class="text-center pb-12">
              <h1 class="text-4xl font-medium text-gray-700">
                {{user.displayName}}
              </h1>
            </div>
            <div class="text-center flex flex-row mb-20 gap-4">
                <div>
                    <p class="font-bold text-gray-700 text-xl">22</p>
                    <p class="text-gray-400">Games</p>
                </div>
                <div>
                    <p class="font-bold text-gray-700 text-xl">10</p>
                    <p class="text-gray-400">Creation date</p>
                </div>
            </div>
            <div class="w-full flex flex-col items-center">
                <button class="px-4 py-2 mr-4 text-white uppercase bg-neutral-600 border-2 border-transparent rounded-lg text-md hover:bg-neutral-800">
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
    constructor (public authService: AuthService) {}
}
