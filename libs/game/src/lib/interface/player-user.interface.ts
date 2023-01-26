import { Timestamp } from '@angular/fire/firestore/firebase';

export interface UserInGame {
  collectionID?: string;
  joinDate: Timestamp | Date;
  name: string;
  ticketID: string;
  win?: boolean;
  round?: number;
}
