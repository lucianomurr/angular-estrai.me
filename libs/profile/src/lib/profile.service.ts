import { Injectable } from '@angular/core';
import { doc, Firestore, setDoc } from '@angular/fire/firestore';
import firebase from 'firebase/compat/app';
import { collection, getCountFromServer, query, where } from 'firebase/firestore';

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
      const profileRef = collection(this.firestore, `admin/${userData.uid}/profile`);

      const collectionData: Profile = {
        displayName: userData?.displayName,
        email: userData?.email,
        photoUrl: userData?.photoURL,
        creationTime: userData?.metadata.creationTime,
        lastSignInTime: userData?.metadata.lastSignInTime,
      };
      const docReference = doc(profileRef);
      return setDoc(docReference, collectionData);
    } else {
      throw new Error('Auth user data was empty...');
    }
  }

    async GetUserCreatedGames(userData: firebase.User): Promise<number> {
        const coll = collection(this.firestore, 'players');
        const q = query(coll, where('userUID', '==', userData.uid));
        const res = await getCountFromServer(q);
        return res.data().count;
  }
}
