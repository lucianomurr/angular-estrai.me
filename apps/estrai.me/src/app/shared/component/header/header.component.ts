import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ToggleService } from '../../services/open-nav.service';
import { UserService } from '@data-access';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, NgOptimizedImage],
  providers: [ToggleService, UserService],
  template: `
    <header class="z-30 flex items-center w-full h-24 sm:h-32">
      <div class="container flex items-center justify-between px-6 mx-auto">
        <div
          class="text-3xl font-black text-gray-800 uppercase dark:text-white"
        >
          <a class="flex-shrink-0" routerLink="/">
            <img
              class="h-38"
              ngSrc="/assets/estrai.me.svg"
              width="180"
              height="38"
              alt="Estrai.me"
              priority
            />
          </a>
        </div>
        <div class="flex items-center">
          <div *ngIf="userService.userData as user">
            <a routerLink="/profile">
              <img
                src="{{ user.photoURL }}"
                alt="profile image"
                class="w-12 rounded-full"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  `,
  styles: [],
})
export class HeaderComponent {
  constructor(
    public toggleService: ToggleService,
    public router: Router,
    public userService: UserService,
  ) {}
}
