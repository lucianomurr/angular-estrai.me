import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationI, NAVIGATION_URL } from '../../model/navigation';
import { Router, RouterModule } from '@angular/router';
import { ToggleService } from '../../services/open-nav.service';
import { take } from 'rxjs/internal/operators/take';
import { AuthService } from '../../services/auth.service';
import { MobileSidenavComponent } from './mobile-sidenav/mobile-sidenav.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, MobileSidenavComponent],
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
          <nav class="items-center hidden text-lg text-gray-800 uppercase font-sen  lg:flex">
            <a routerLink="/" class="flex px-6 py-2"> Home </a>
            <a routerLink="/about" class="flex px-6 py-2"> About </a>
            <a
              (click)="logout()"
              class="flex px-6 py-2 cursor-pointer"
              *ngIf="authService.auth.user | async as user; else showLogin">
              Logout
            </a>
            <ng-template #showLogin>
              <a (click)="login()" class="flex px-6 py-2 cursor-pointer"> Login </a>
            </ng-template>
          </nav>
          <button class="flex flex-col ml-4 lg:hidden" (click)="toggleService.updateData(!menuIsOpened())">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </header>
    <!-- only mobile sidenav -->
    <app-mobile-sidenav
      [showSidebar]="toggleService.sidenav$ | async"
      (closeSidenav)="closeMenuIfOpened()"
      (logOutUser)="logout()"
      (logInUser)="login()"></app-mobile-sidenav>
    <!-- /sidenav -->
  `,
  styles: [],
})
export class HeaderComponent {
  public Routes: NavigationI[];

  constructor(public toggleService: ToggleService, public authService: AuthService, private router: Router) {
    this.Routes = NAVIGATION_URL;
    router.events.subscribe(() => {
      this.closeMenuIfOpened();
    });
  }

  menuIsOpened() {
    let toReturn = false;
    this.toggleService.sidenav$.pipe(take(1)).subscribe(sideNavStatus => (toReturn = sideNavStatus));
    return toReturn;
  }

  login() {
    this.authService.login();
    this.closeMenuIfOpened();
  }
  logout() {
    this.authService.logout();
    this.closeMenuIfOpened();
  }
  closeMenuIfOpened() {
    if (this.menuIsOpened()) this.toggleService.updateData(!this.menuIsOpened());
  }
}
