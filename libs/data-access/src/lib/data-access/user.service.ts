import { Injectable, inject } from '@angular/core';
import { ProfileService } from './profile.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, take } from 'rxjs';
import { User } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  afAuth = inject(AngularFireAuth);

  public userData: User | undefined | null;
  private profileService = inject(ProfileService);

  constructor() {
    this.afAuth.authState.subscribe((user) => {
      //console.log('userService, constructor: ', user);
      this.updateCurrentUser();
      this.userData = user as User;
      // console.log('userService, constructor: userData', this.userData);
    });
  }

  getCurrentUser(): Observable<User | null> {
    // console.log('getCurrentUser');
    const auth$ = this.afAuth.authState.pipe(take(1));
    auth$.subscribe((user) => {
      this.userData = user as User;
      //console.log('getUserData: ', this.userData);
    });
    return auth$ as Observable<User>;
  }

  updateCurrentUser() {
    // console.log('updateCurrentUser');
    const user$ = this.afAuth.user.pipe(take(1));
    user$.subscribe((user) => {
      //console.log('getUserData: ', user);
    });
  }
}
