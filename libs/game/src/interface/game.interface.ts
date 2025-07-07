import { UserInGame } from './player-user.interface';

export interface RaffleDocument {
  gameName?: string;
  collectionID?: string;
  userUID: string;
  creationDate: any;
  gameID: string;
  status: 'ready' | 'started' | 'closed';
  email: string;
  users?: UserInGame[];
  actualRound: number;
  totalUsers?: number;
}
