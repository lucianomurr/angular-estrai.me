import { Component, Inject, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationI, NAVIGATION_URL } from '../../model/navigation'
import { RouterModule } from '@angular/router';
import { ToggleService } from '../../services/open-nav.service';
import { take } from 'rxjs/internal/operators/take'
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  providers: [
    { provide: 'UserToggle', useClass: ToggleService },
    { provide: 'NavToggle', useClass: ToggleService }
  ],
  template: `
  <div>
    <nav class="bg-white dark:bg-gray-800  shadow py-4 ">
      <div class="px-8 mx-auto max-w-7xl">
        <div class="flex items-center justify-between h-16">
          <div class=" flex items-center">
            <a class="flex-shrink-0" href="/">
                <img class="h-38" src="/assets/estrai.me.svg" alt="Workflow"/>
            </a>
          </div>
          <div class="block flex flex-row" >
            <div class="flex" style="border:1px solid green;">
              <div class="relative place-content-center" style="border:1px solid black;">
                <div>
                  <button type="button"
                      class="flex items-right justify-right w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
                      id="options-menu"
                      (click)="userToggleService.updateData(!userMenuIsOpened())"
                      >
                      <svg width="20" fill="currentColor" height="20" class="text-gray-800" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1523 1339q-22-155-87.5-257.5t-184.5-118.5q-67 74-159.5 115.5t-195.5 41.5-195.5-41.5-159.5-115.5q-119 16-184.5 118.5t-87.5 257.5q106 150 271 237.5t356 87.5 356-87.5 271-237.5zm-243-699q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zm512 256q0 182-71 347.5t-190.5 286-285.5 191.5-349 71q-182 0-348-71t-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z">
                          </path>
                      </svg>
                  </button>
                </div>
                <div class="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-20"
                    [ngClass]="{ invisible: !(userToggleService.sidenav$ | async) }">
                  <div class="py-1 " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <div *ngIf="authService.auth.user | async as user; else showLogin">
                      <a href="#" class="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                        <span class="flex flex-col">
                            <span>Settings</span>
                        </span>
                      </a>
                      <a (click)="logout()"
                        class="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                        <span class="flex flex-col">
                          <span>Logout {{user.displayName}}</span>
                        </span>
                      </a>
                    </div>
                    <ng-template #showLogin>
                      <a (click)="login()" class="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                        <span class="flex flex-col">
                          <span>Login</span>
                        </span>
                      </a>
                    </ng-template>
                  </div>
                </div>
              </div>
            </div>

              <div class="flex" style="border:1px solid green;">
                <div class="relative" style="border:1px solid black;">
                  <!-- hamburger -->
                  <div>
                    <button
                      class="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
                      (click)="toggleService.updateData(!menuIsOpened())"
                      >
                        <svg width="20" height="20" fill="currentColor" class="w-8 h-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                            </path>
                        </svg>
                    </button>
                  </div>
                  <div class="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-20"
                        [ngClass]="{ invisible: !(toggleService.sidenav$ | async) }">
                    <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      <a class="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem"
                          *ngFor="let route of Routes"
                          [routerLink]="[route.link]"
                          routerLinkActive="text-gray-800" [routerLinkActiveOptions]="{exact: true}" >
                              {{route.title}}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>

  `,
  styles: [
  ]
})
export class HeaderComponent implements OnInit{
  public Routes: NavigationI[];

  constructor(
    @Inject('UserToggle') public userToggleService: ToggleService,
    @Inject('NavToggle') public toggleService: ToggleService,
    public authService: AuthService) {
    this.Routes = NAVIGATION_URL
  }

  ngOnInit(): void {

  }

  menuIsOpened() {

    let toReturn: Boolean = false;
    this.toggleService.sidenav$.pipe(take(1)).subscribe(sideNavStatus => toReturn = sideNavStatus);
    console.log('Menu: ',toReturn);
    return toReturn;

  }
  userMenuIsOpened() {

    let toReturn: Boolean = false;
    this.userToggleService.sidenav$.pipe(take(1)).subscribe(sideNavStatus => toReturn = sideNavStatus);
    console.log('userMenu: ',toReturn);
    return toReturn;

  }

  login() {
    this.authService.login();
  }
  logout() {
    this.authService.logout();
  }

}
