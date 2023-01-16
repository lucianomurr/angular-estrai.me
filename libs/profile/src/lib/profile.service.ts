import { Injectable } from '@angular/core';
import { doc, Firestore, setDoc } from '@angular/fire/firestore';
import firebase from 'firebase/compat/app';
import { collection } from 'firebase/firestore';

interface Profile {
  displayName: string | null;
  email: string | null;
  photoUrl: string | null;
  creationTime: string | undefined;
  lastSignInTime: string | undefined;
}

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private firestore: Firestore) {}

  SaveProfile(userData: firebase.User | null) {
    if (userData) {
      const profileRef = collection(this.firestore, `profiles`);

      const _customId = userData.uid;

      const collectionData: Profile = {
        displayName: userData?.displayName,
        email: userData?.email,
        photoUrl: userData?.photoURL,
        creationTime: userData?.metadata.creationTime,
        lastSignInTime: userData?.metadata.lastSignInTime,
      };
      const docReference = doc(profileRef, _customId);
      return setDoc(docReference, collectionData);
    } else {
      throw new Error('Auth user data was empty...');
    }
  }
}
