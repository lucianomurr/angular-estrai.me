import { Injectable, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { GoogleAuthProvider, GithubAuthProvider } from '@angular/fire/auth';
import { FirebaseError } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { from } from 'rxjs';
import { ProfileService } from './profile.service';
import { User } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth: Auth = inject(Auth);
  private profileService = inject(ProfileService);

  constructor(public afAuth: AngularFireAuth) {}

  /**
   *
   * @returns Observable from promise after logout
   */
  logout() {
    return from(this.auth.signOut());
  }

  // Sign in with Google
  GoogleAuth() {
    return this.authLogin(new GoogleAuthProvider());
  }
  // Sign in with Google
  GithubAuth() {
    return this.authLogin(new GithubAuthProvider());
  }
  // Auth logic to run auth providers
  authLogin(provider: GithubAuthProvider | GoogleAuthProvider) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        console.log('You have been successfully logged in!', result);
        this.profileService.SaveProfile(result.user as User);
      },
      (error) => {
        this.AuthError(error);
      });
  }

  // Handle login error
  AuthError(err: FirebaseError) {
    console.log(err);
    if (err?.code === 'auth/account-exists-with-different-credential') {
      return alert(
        'This email is already registered with a different provider!',
      );
    }

    return alert('Something went wrong, please again later!');
  }
}
