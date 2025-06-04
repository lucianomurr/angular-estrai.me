import { Component, OnInit, inject } from '@angular/core';

import { Router, RouterModule } from '@angular/router';
import { AuthService, UserService } from '@data-access';
import { ProfileService } from '../../../data-access/src/lib/data-access/profile.service';
import { User } from 'firebase/auth';
import { take } from 'rxjs';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterModule],
  providers: [ProfileService, UserService],
  template: `
    @if (userService.userData; as user) {
      <div
        class="w-full relative z-10 flex items-center overflow-hidden bg-white dark:bg-gray-800"
      >
        <div
          class="container relative flex px-2 py-6 mx-auto items-center flex-col"
        >
          <h1
            class="text-6xl font-black leading-none m-10 md:m-6 text-gray-800 font-bebas-neue dark:text-white"
          >
            My Profile
          </h1>
          <div class="p-5">
            <div class="p-16 bg-white shadow  rounded-xl">
              <div class="relative mb-10">
                <div
                  class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2x flex items-center justify-center text-indigo-500"
                >
                  <img
                    src="{{ user.photoURL }}"
                    alt="user profile image"
                    class="rounded-full"
                  />
                </div>
              </div>
              <div class="text-center pb-12">
                <h1 class="text-4xl font-medium text-gray-700">
                  {{ user.displayName }}
                </h1>
                @if (user.email) {
                  <small class="text-neutral-500">
                    Registered with <u>{{ user.email }}</u>
                  </small>
                }
              </div>
              <div class="text-center flex flex-row mb-20 gap-4 justify-around">
                <div>
                  <p class="font-bold text-gray-700 text-xl">{{ games }}</p>
                  <p class="text-gray-400">Created Games</p>
                </div>
              </div>
              <div class="flex flex-col items-center">
                <button
                  (click)="onClickLogout()"
                  [disabled]="disabledLogoutBtn"
                  class="flex flex-row items-center gap-2 px-4 py-2 text-white uppercase bg-neutral-600 border-2 border-transparent rounded-lg text-md hover:bg-neutral-800 disabled:opacity-30 disabled:bg-neutral-600 disabled:cursor-not-allowed"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      class="w-5 h-5 fill-current text-white"
                    >
                      <path
                        d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"
                      ></path>
                      <rect width="32" height="64" x="256" y="232"></rect>
                    </svg>
                  </span>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    }
  `,
  styles: [],
})
export class ProfileComponent implements OnInit {
  private profileService = inject(ProfileService);
  private authService = inject(AuthService);
  public userService = inject(UserService);

  games: number = 0;
  disabledLogoutBtn: boolean;

  constructor(private router: Router) {}

  ngOnInit() {
    this.disabledLogoutBtn = false;
    const user = this.userService.getCurrentUser();

    user.pipe(take(1)).subscribe((user) => {
      if (user) {
        console.log('ProfileComponent,ngOnInit', user);
        this.updateUserTotalGames(user);
      }
    });
  }

  async updateUserTotalGames(user: User) {
    console.log('updateUserTotalGames');
    this.games = await this.profileService.GetUserCreatedGames(user);
  }

  async onClickLogout() {
    this.disabledLogoutBtn = true;
    await this.authService.logout();
    this.router.navigate(['/']);
  }
}
