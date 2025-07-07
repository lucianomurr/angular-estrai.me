import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-unauthorized',
  standalone: true,
  imports: [RouterModule],
  template: `
    <!-- component -->
    <main
      class="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]"
    >
      <h1 class="text-9xl font-extrabold text-white tracking-widest">401</h1>
      <div class="bg-[#FF6A3D] px-2 text-sm rounded-sm rotate-12 absolute">
        Unauthorized
      </div>
      <button class="mt-5">
        <a
          class="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-hidden focus:ring-3"
        >
          <span
            class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"
          ></span>

          <span
            class="relative block px-8 py-3 bg-[#1A2238] border border-current"
          >
            <a [routerLink]="['/']" routerLinkActive="router-link-active"
              >Go Home</a
            >
          </span>
        </a>
      </button>
    </main>
  `,
  styles: [],
})
export class UnauthorizedComponent {}
