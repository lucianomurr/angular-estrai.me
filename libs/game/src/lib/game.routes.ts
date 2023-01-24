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
        loadComponent: () => import('./admin/new-game/new-game.component').then(m => m.NewGameComponent),
        canActivate: [AngularFireAuthGuard],
      },
      {
        path: 'manage/:gameID',
        loadComponent: () => import('./admin/play-game/play.component').then(m => m.PlayGameComponent),
        canActivate: [AngularFireAuthGuard],
      },
      {
        path: 'join/:gameID',
        loadComponent: () =>
          import('./player/assign-ticket/assign-ticket.component').then(m => m.AssignTicketComponent),
        canActivate: [AngularFireAuthGuard],
      },
      {
        path: 'join',
        loadComponent: () => import('./player/join-game/join-game.component').then(m => m.JoinGameComponent),
        canActivate: [AngularFireAuthGuard],
      },
      {
        path: 'assign/:ticketNumber',
        loadComponent: () =>
          import('./player/assign-ticket/assign-ticket.component').then(m => m.AssignTicketComponent),
        canActivate: [AngularFireAuthGuard],
      },
      {
        path: 'waiting/:gameID/ticket/:ticketID',
        loadComponent: () => import('./player/waiting/waiting.component').then(m => m.WaitingComponent),
        canActivate: [AngularFireAuthGuard],
      },

    ],
  },
];
