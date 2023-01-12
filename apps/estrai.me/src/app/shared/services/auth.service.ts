import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import * as auth from 'firebase/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: firebase.User | undefined | null;

  constructor(public auth: AngularFireAuth, public router: Router) {
    auth.authState.subscribe(user => {
      this.userData = user;
    });
  }
  login() {
    return this.GoogleAuth();
    //this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.auth.signOut();
    this.router.navigate(['/']);
    return;
  }
  // Sign in with Google
  GoogleAuth() {
    this.AuthLogin(new auth.GoogleAuthProvider());
  }
  // Auth logic to run auth providers
  AuthLogin(provider: firebase.auth.AuthProvider | auth.GoogleAuthProvider) {
    return this.auth
      .signInWithPopup(provider)
      .then(result => {
        this.SetUserData(result.user);
      })
      .catch(error => {
        window.alert(error);
      });
  }
  SetUserData(user: firebase.User | null) {
    this.userData = user;
  }
}
