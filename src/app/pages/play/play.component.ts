import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-play',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-8 bg-white shadow dark:bg-gray-800">
      <p class="mb-6 text-xl font-normal text-center text-gray-500 dark:text-gray-300">Join using the code:</p>
      <p class="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">{{ gameID }}</p>
      <p class="mb-12 text-xl font-normal text-center text-gray-500 dark:text-gray-300">All the users appears below</p>
      <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        <div class="p-4" *ngFor="let item of users">
          <div class="flex-col  flex justify-center items-center">
            <div class="flex-shrink-0">
              <a href="#" class="relative block">
                <img
                  alt="profil"
                  src="https://ui-avatars.com/api/?name={{ item.name }}&size=150"
                  class="mx-auto object-cover rounded-full h-20 w-20 " />
              </a>
            </div>
            <div class="mt-2 text-center flex flex-col">
              <span class="text-lg font-medium text-gray-600 dark:text-white"> {{ item.name }} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class PlayComponent {
  public gameID: string | null;

  public users = [
    {
      name: 'Giorgio',
    },
    {
      name: 'Marco',
    },
    {
      name: 'Davide',
    },
    {
      name: 'Mario',
    },
    {
      name: 'Dario',
    },
    {
      name: 'Gabriele',
    },
    {
      name: 'Giorgio',
    },
    {
      name: 'Marco',
    },
    {
      name: 'Davide',
    },
    {
      name: 'Mario',
    },
    {
      name: 'Dario',
    },
    {
      name: 'Gabriele',
    },
    {
      name: 'Giorgio',
    },
    {
      name: 'Marco',
    },
    {
      name: 'Davide',
    },
    {
      name: 'Mario',
    },
    {
      name: 'Dario',
    },
    {
      name: 'Gabriele',
    },
    {
      name: 'Giorgio',
    },
    {
      name: 'Marco',
    },
    {
      name: 'Davide',
    },
    {
      name: 'Mario',
    },
    {
      name: 'Dario',
    },
    {
      name: 'Gabriele',
    },
  ];

  constructor(private route: ActivatedRoute) {
    this.gameID = this.route.snapshot.paramMap.get('gameID');
  }
}
