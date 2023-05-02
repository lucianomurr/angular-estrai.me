import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ToggleService } from '../../services/open-nav.service';
import { AuthService } from '@auth';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  providers: [ToggleService],
  template: `
    <header class="z-30 flex items-center w-full h-24 sm:h-32">
      <div class="container flex items-center justify-between px-6 mx-auto">
        <div class="text-3xl font-black text-gray-800 uppercase dark:text-white">
          <a class="flex-shrink-0" routerLink="/">
            <img class="h-38" src="/assets/estrai.me.svg" alt="Workflow" />
          </a>
        </div>
        <div class="flex items-center">
          <div *ngIf="authService.auth.user | async as user">
            <a routerLink="/profile">
              <img src="{{ user.photoURL }}" alt="profile image" class="w-12 rounded-full" />
            </a>
          </div>
        </div>
      </div>
    </header>
  `,
  styles: [],
})
export class HeaderComponent {
  constructor(public toggleService: ToggleService, public router: Router, public authService: AuthService) {}
}
