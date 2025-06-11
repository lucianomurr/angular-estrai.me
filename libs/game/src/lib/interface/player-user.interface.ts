import { Timestamp } from '@angular/fire/firestore/firebase';

export interface UserInGame {
  collectionID?: string;
  joinDate: any;
  name: string;
  ticketID: string;
  win?: boolean;
  round?: number;
}
