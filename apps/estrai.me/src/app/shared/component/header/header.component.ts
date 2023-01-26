import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ToggleService } from '../../services/open-nav.service';
import { take } from 'rxjs/internal/operators/take';
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
          <button class="flex flex-col ml-4" (click)="toggleService.updateData(!menuIsOpened())">
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
    <app-mobile-sidenav [showSidebar]="toggleService.sidenav$ | async" (closeSidenav)="closeMenuIfOpened()" />
    <!-- /sidenav -->
  `,
  styles: [],
})
export class HeaderComponent {
  constructor(public toggleService: ToggleService, private router: Router) {
    router.events.subscribe(() => {
      this.closeMenuIfOpened();
    });
  }

  menuIsOpened() {
    let toReturn = false;
    this.toggleService.sidenav$.pipe(take(1)).subscribe(sideNavStatus => (toReturn = sideNavStatus));
    return toReturn;
  }

  closeMenuIfOpened() {
    if (this.menuIsOpened()) this.toggleService.updateData(!this.menuIsOpened());
  }
}
