import { Timestamp } from '@angular/fire/firestore/firebase';
import { UserInGame } from './player-user.interface';

export interface RaffleDocument {
  collectionID?: string;
  userUID: string;
  creationDate: Timestamp | Date;
  gameID: string;
  status: 'ready' | 'started' | 'closed';
  email: string;
  users?: UserInGame[];
  actualRound: number;
}
