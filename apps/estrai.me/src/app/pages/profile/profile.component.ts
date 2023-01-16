import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="relative z-10 flex items-center overflow-hidden bg-white dark:bg-gray-800">
      <div class="container relative flex px-2 py-16 mx-auto">
        <div class="p-5">
          <div class="p-8 bg-white shadow mt-24">
            <div class="grid grid-cols-1 md:grid-cols-3">
              <div class="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                <div>
                  <p class="font-bold text-gray-700 text-xl">22</p>
                  <p class="text-gray-400">Games</p>
                </div>
                <div>
                  <p class="font-bold text-gray-700 text-xl">10</p>
                  <p class="text-gray-400">Creation date</p>
                </div>
              </div>
              <div class="relative">
                <div
                  class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fill-rule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
              <div class="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center"></div>
            </div>
            <div class="mt-20 text-center border-b pb-12">
              <h1 class="text-4xl font-medium text-gray-700">
                Jessica Jones, <span class="font-light text-gray-500">27</span>
              </h1>
              <p class="font-light text-gray-600 mt-3">Roma, Italia</p>
              <p class="mt-8 text-gray-500">Solution Manager - Creative Tim Officer</p>
              <p class="mt-2 text-gray-500">University of Computer Science</p>
            </div>
            <div class="mt-12 flex flex-col justify-center">
              <p class="text-gray-600 text-center font-light lg:px-16">
                An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy —
                writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove
                structure. An artist of considerable range.
              </p>
              <button
                [routerLink]="['/new-game']"
                routerLinkActive="router-link-active"
                class="text-indigo-500 py-2 px-4  font-medium mt-4">
                Go to games
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class ProfileComponent {}
