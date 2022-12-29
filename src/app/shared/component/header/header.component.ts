import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationI, NAVIGATION_URL } from '../../model/navigation';
import { Router, RouterModule } from '@angular/router';
import { ToggleService } from '../../services/open-nav.service';
import { take } from 'rxjs/internal/operators/take';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  providers: [
    ToggleService
  ],
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
            <span class="w-6 h-1 mb-1 bg-gray-800"> </span>
            <span class="w-6 h-1 mb-1 bg-gray-800"> </span>
            <span class="w-6 h-1 mb-1 bg-gray-800"> </span>
          </button>
        </div>
      </div>
    </header>
    <!-- only mobile sidenav -->
    <div
      class="absolute top-4.5 right-2 bg-white dark:bg-gray-800 z-20 border-t-4 border-l-4 "
      [ngClass]="{ invisible: !(toggleService.sidenav$ | async) }">
      <div class="flex flex-col sm:flex-row sm:justify-around">
        <div class="h-screen w-72">
          <nav class="mt-10 px-6 ">
            <a
              class="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg "
              routerLink="/"
              routerLinkActive="bg-gray-100 dark:bg-gray-600 text-gray-800">
              <span class="mx-4 text-lg font-normal"> Home </span>
              <span class="flex-grow text-right"> </span>
            </a>
            <a
              class="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg "
              routerLink="/about"
              routerLinkActive="bg-gray-100 dark:bg-gray-600 text-gray-800">
              <span class="mx-4 text-lg font-normal"> About </span>
              <span class="flex-grow text-right"> </span>
            </a>
            <a
              (click)="logout()"
              class="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg "
              *ngIf="authService.auth.user | async as user; else showLoginMobile">
              <span class="mx-4 text-lg font-normal"> Logout </span>
              <span class="flex-grow text-right"> </span>
            </a>
            <ng-template #showLoginMobile>
              <a
                class="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg "
                (click)="login()">
                <span class="mx-4 text-lg font-normal"> Login </span>
                <span class="flex-grow text-right"> </span>
              </a>
            </ng-template>
          </nav>
        </div>
      </div>
    </div>
    <!-- /sidenav -->
  `,
  styles: [],
})
export class HeaderComponent implements OnInit {
  public Routes: NavigationI[];

  constructor(
    public toggleService: ToggleService,
    public authService: AuthService,
    private router: Router
  ) {
    this.Routes = NAVIGATION_URL;
    router.events.subscribe(val => {
      this.closeMenuIfOpened();
    });
  }

  ngOnInit(): void {}

  menuIsOpened() {
    let toReturn: Boolean = false;
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
  closeMenuIfOpened(){
    if (this.menuIsOpened()) this.toggleService.updateData(!this.menuIsOpened());
  }
}
