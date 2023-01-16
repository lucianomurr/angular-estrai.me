import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import * as auth from 'firebase/auth';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { ProfileService } from './profile.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: firebase.User | undefined | null;

  constructor(public auth: AngularFireAuth, private router: Router, private profileService: ProfileService) {
    this.getUserData();
  }

  async getUserData() {
    return await this.auth.authState.pipe(take(1)).subscribe(user => {
      this.userData = user;
    });
  }

  Login() {
    //implement the login method
    return false;
  }
  logout() {
    this.auth.signOut();
    this.router.navigate(['/']);
    return;
  }

  // Sign up with email/password
  SignUp(email: string, password: string) {
    return this.auth
      .createUserWithEmailAndPassword(email, password)
      .then(result => {
        /* Call the SendVerificaitonMail() function when new user sign
        up and returns promise */
        this.SendVerificationMail();
        this.SetUserData(result.user);
      })
      .catch(error => {
        window.alert(error.message);
      });
  }

  // Send email verfificaiton when new user sign up
  async SendVerificationMail() {
    ((await this.auth.currentUser) as firebase.User).sendEmailVerification().then(() => {
      console.log('email sent');
    });

    // return this.auth.currentUser
    //   .then((u:firebase.User) => u.sendEmailVerification())
    //   .then(() => {
    //     this.router.navigate(['auth/log-in']);
    //   });
  }

  // Sign in with Google
  GoogleAuth() {
    this.AuthLogin(new auth.GoogleAuthProvider());
  }
  // Sign in with Google
  GithubAuth() {
    this.AuthLogin(new auth.GithubAuthProvider());
  }
  // Auth logic to run auth providers
  AuthLogin(provider: firebase.auth.AuthProvider | auth.GoogleAuthProvider) {
    return this.auth
      .signInWithPopup(provider)
      .then(result => {
        this.SetUserData(result.user);
        this.profileService.SaveProfile(result.user);
      })
      .catch(error => {
        window.alert(error);
      });
  }
  SetUserData(user: firebase.User | null) {
    this.userData = user;
  }
}
