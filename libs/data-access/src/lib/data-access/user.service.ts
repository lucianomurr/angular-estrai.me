import { Injectable, inject } from '@angular/core';
import { ProfileService } from './profile.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, take } from 'rxjs';
import { User } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userData: User | undefined | null;
  private profileService = inject(ProfileService);

  constructor(public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe((user) => {
      //console.log('userService, constructor: ', user);
      this.updateCurrentUser();
      this.userData = user as User;
    });
  }

  getCurrentUser(): Observable<User | null> {
    const auth$ = this.afAuth.authState.pipe(take(1));
    auth$.subscribe((user) => {
      this.userData = user as User;
      //console.log('getUserData: ', this.userData);
    });
    return auth$ as Observable<User>;
  }

  updateCurrentUser() {
    console.log('updateCurrentUser');
    const user$ = this.afAuth.user.pipe(take(1));
    user$.subscribe((user) => {
      //console.log('getUserData: ', user);
    });
  }
}
