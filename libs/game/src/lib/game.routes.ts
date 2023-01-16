import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';
import { Routes } from '@angular/router';
import { GameComponent } from './game.component';


export const GAME_ROUTES: Routes = [
  {
    path: '',
    component: GameComponent,
    providers: [],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'new',
      },
      {
        path: 'new',
        loadComponent: () => import('./new-game/new-game.component').then(m => m.NewGameComponent),
        canActivate: [AngularFireAuthGuard],
      },
      {
        path: 'manage/:gameID',
        loadComponent: () => import('./play-game/play.component').then(m => m.PlayGameComponent),
        canActivate: [AngularFireAuthGuard],
      },
      {
        path: 'join/:gameID',
        loadComponent: () =>
          import('./assign-ticket/assign-ticket.component').then(m => m.AssignTicketComponent),
        canActivate: [AngularFireAuthGuard],
      },
      {
        path: 'join',
        loadComponent: () => import('./join-game/join-game.component').then(m => m.JoinGameComponent),
        canActivate: [AngularFireAuthGuard],
      },
      {
        path: 'assign/:ticketNumber',
        loadComponent: () =>
          import('./assign-ticket/assign-ticket.component').then(m => m.AssignTicketComponent),
        canActivate: [AngularFireAuthGuard],
      },
      {
        path: 'waiting/:ticketNumber',
        loadComponent: () => import('./waiting/waiting.component').then(m => m.WaitingComponent),
        canActivate: [AngularFireAuthGuard],
      },

    ],
  },
];
