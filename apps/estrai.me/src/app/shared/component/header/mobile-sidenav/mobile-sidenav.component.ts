import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';
import firebase from 'firebase/compat/app';
import { take } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-sidenav',
  standalone: true,
  imports: [CommonModule],
  providers: [AuthService],
  template: ` <div
    class="absolute top-0 right-0 z-20 flex flex-col h-full p-3 w-60 bg-gray-300 dark:bg-gray-900 dark:text-gray-100 ease-in-out duration-300"
    [ngClass]="{ 'translate-x-0': showSidebar === true, 'translate-x-full': showSidebar === false }">
    <div class="space-y-3">
      <div class="flex flex-row-reverse">
        <button class="pt-5" (click)="onClickCloseSidenav()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div class="flex-1">
        <ul class="pt-2 pb-4 space-y-1 text-sm">
          <li class="rounded-sm">
            <a rel="noopener noreferrer" href="#" class="flex items-center p-2 space-x-3 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="w-5 h-5 fill-current dark:text-gray-400">
                <path
                  d="M469.666,216.45,271.078,33.749a34,34,0,0,0-47.062.98L41.373,217.373,32,226.745V496H208V328h96V496H480V225.958ZM248.038,56.771c.282,0,.108.061-.013.18C247.9,56.832,247.756,56.771,248.038,56.771ZM448,464H336V328a32,32,0,0,0-32-32H208a32,32,0,0,0-32,32V464H64V240L248.038,57.356c.013-.012.014-.023.024-.035L448,240Z"></path>
              </svg>
              <span>Home</span>
            </a>
          </li>
          <li class="rounded-sm">
            <a rel="noopener noreferrer" href="#" class="flex items-center p-2 space-x-3 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="w-5 h-5 fill-current dark:text-gray-400">
                <path
                  d="M203.247,386.414,208,381.185V355.4L130.125,191H93.875L16,355.4v27.042l4.234,4.595a124.347,124.347,0,0,0,91.224,39.982h.42A124.343,124.343,0,0,0,203.247,386.414ZM176,368.608a90.924,90.924,0,0,1-64.231,26.413h-.33A90.907,90.907,0,0,1,48,369.667V362.6l64-135.112L176,362.6Z"></path>
                <path
                  d="M418.125,191h-36.25L304,355.4v27.042l4.234,4.595a124.347,124.347,0,0,0,91.224,39.982h.42a124.343,124.343,0,0,0,91.369-40.607L496,381.185V355.4ZM464,368.608a90.924,90.924,0,0,1-64.231,26.413h-.33A90.907,90.907,0,0,1,336,369.667V362.6l64-135.112L464,362.6Z"></path>
                <path
                  d="M272,196.659A56.223,56.223,0,0,0,309.659,159H416V127H309.659a55.991,55.991,0,0,0-107.318,0H96v32H202.341A56.223,56.223,0,0,0,240,196.659V463H136v32H376V463H272ZM232,143a24,24,0,1,1,24,24A24,24,0,0,1,232,143Z"></path>
              </svg>
              <span>Dashboard</span>
            </a>
          </li>

          <li class="rounded-sm">
            <a rel="noopener noreferrer" href="#" class="flex items-center p-2 space-x-3 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="w-5 h-5 fill-current dark:text-gray-400">
                <path
                  d="M245.151,168a88,88,0,1,0,88,88A88.1,88.1,0,0,0,245.151,168Zm0,144a56,56,0,1,1,56-56A56.063,56.063,0,0,1,245.151,312Z"></path>
                <path
                  d="M464.7,322.319l-31.77-26.153a193.081,193.081,0,0,0,0-80.332l31.77-26.153a19.941,19.941,0,0,0,4.606-25.439l-32.612-56.483a19.936,19.936,0,0,0-24.337-8.73l-38.561,14.447a192.038,192.038,0,0,0-69.54-40.192L297.49,32.713A19.936,19.936,0,0,0,277.762,16H212.54a19.937,19.937,0,0,0-19.728,16.712L186.05,73.284a192.03,192.03,0,0,0-69.54,40.192L77.945,99.027a19.937,19.937,0,0,0-24.334,8.731L21,164.245a19.94,19.94,0,0,0,4.61,25.438l31.767,26.151a193.081,193.081,0,0,0,0,80.332l-31.77,26.153A19.942,19.942,0,0,0,21,347.758l32.612,56.483a19.937,19.937,0,0,0,24.337,8.73l38.562-14.447a192.03,192.03,0,0,0,69.54,40.192l6.762,40.571A19.937,19.937,0,0,0,212.54,496h65.222a19.936,19.936,0,0,0,19.728-16.712l6.763-40.572a192.038,192.038,0,0,0,69.54-40.192l38.564,14.449a19.938,19.938,0,0,0,24.334-8.731L469.3,347.755A19.939,19.939,0,0,0,464.7,322.319Zm-50.636,57.12-48.109-18.024-7.285,7.334a159.955,159.955,0,0,1-72.625,41.973l-10,2.636L267.6,464h-44.89l-8.442-50.642-10-2.636a159.955,159.955,0,0,1-72.625-41.973l-7.285-7.334L76.241,379.439,53.8,340.562l39.629-32.624-2.7-9.973a160.9,160.9,0,0,1,0-83.93l2.7-9.972L53.8,171.439l22.446-38.878,48.109,18.024,7.285-7.334a159.955,159.955,0,0,1,72.625-41.973l10-2.636L222.706,48H267.6l8.442,50.642,10,2.636a159.955,159.955,0,0,1,72.625,41.973l7.285,7.334,48.109-18.024,22.447,38.877-39.629,32.625,2.7,9.972a160.9,160.9,0,0,1,0,83.93l-2.7,9.973,39.629,32.623Z"></path>
              </svg>
              <span>Settings</span>
            </a>
          </li>
          <li class="rounded-sm">
            <a
              rel="noopener noreferrer"
              href="#"
              class="flex items-center p-2 space-x-3 rounded-md"
              (click)="onClickLogout()">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="w-5 h-5 fill-current dark:text-gray-400">
                <path
                  d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                <rect width="32" height="64" x="256" y="232"></rect>
              </svg>
              <span>Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="flex items-center p-2 mt-12 space-x-4 justify-self-end" *ngIf="loggedUser">
      <img src="{{ loggedUser.photoURL }}" alt="" class="w-12 h-12 rounded-lg dark:bg-gray-500" />
      <div>
        <h2 class="text-lg font-semibold">{{ loggedUser.displayName }}</h2>
        <span class="flex items-center space-x-1">
          <a rel="noopener noreferrer" href="#" class="text-xs hover:underline dark:text-gray-400">View profile</a>
        </span>
      </div>
    </div>
  </div>`,
  styles: [],
})
export class MobileSidenavComponent {
  loggedUser: firebase.User | undefined | null;

  @Input() showSidebar: boolean | null = false;
  @Output() closeSidenav = new EventEmitter();
  @Output() logOutUser = new EventEmitter();

  constructor(private auth: AngularFireAuth, private router: Router) {
    this.auth.authState.pipe(take(1)).subscribe(user => {
      console.log('service', user);
      this.loggedUser = user;
    });
  }

  onClickCloseSidenav() {
    this.closeSidenav.emit();
  }
  onClickLogout() {
    this.logOutUser.emit();
  }
}
