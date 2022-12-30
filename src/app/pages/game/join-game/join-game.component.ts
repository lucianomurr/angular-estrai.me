import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-join-game',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white dark:bg-gray-800 ">
      <div class="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
          <span class="block"> Insert your game ID! </span>
          <span class="block text-red-600"> The next winner could be you... </span>
        </h2>
        <div class="lg:mt-0 lg:flex-shrink-0">
          <div class="mt-12 inline-flex rounded-md shadow">
            <div class=" relative ">
              <input
                type="text"
                id="game-id"
                class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="game id eg: xx22xx22" />
            </div>
            <div class="relative">
              <button
                type="button"
                class="py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                </svg>

                Enter
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white dark:bg-gray-800 w-full mx-auto p-8">
        <div class="w-10 h-10 m-auto mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
          </svg>
        </div>
        <p class="text-gray-600 dark:text-white w-full md:w-2/3 m-auto text-center text-lg md:text-3xl">
          <span class="font-bold text-red-800"> “ </span>
          Explain how the extraction works...
          <span class="font-bold text-red-800"> ” </span>
        </p>
        <div class="flex items-center justify-center mt-8">
          <a href="#" class="relative block">
            <img
              alt="profil"
              src="https://ui-avatars.com/api/?name=Luciano"
              class="mx-auto object-cover rounded-full h-10 w-10 " />
          </a>
          <div class="flex items-center justify-center ml-2">
            <span class="mr-2 text-lg font-semibold text-red-600"> Luciano </span>
            <span class="text-xl font-light text-gray-400"> / </span>
            <span class="ml-2 text-gray-400 text-md"> Estrai.me Creator </span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class JoinGameComponent {}
