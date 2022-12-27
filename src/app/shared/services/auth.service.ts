import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import * as auth from 'firebase/auth';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: firebase.User | undefined | null;

  constructor(public auth: AngularFireAuth, public router: Router) { }
  login() {
    return this.GoogleAuth()
    //this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    return this.auth.signOut();
  }
  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider()).then((res: any) => {
      this.router.navigate(['players']);
    });
  }
  // Auth logic to run auth providers
  AuthLogin(provider: firebase.auth.AuthProvider | auth.GoogleAuthProvider) {
    return this.auth
      .signInWithPopup(provider)
      .then((result) => {
        this.SetUserData(result.user);
        console.log(result.user)
        this.router.navigate(['players']);
      })
      .catch((error) => {
        window.alert(error);
      });
  }
  SetUserData(user: firebase.User | null){
    this.userData = user;
  }
}
