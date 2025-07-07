import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';
import { Routes } from '@angular/router';

export const GAME_ROUTES: Routes = [
  {
    path: '',
    providers: [],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },

      {
        path: 'manage/:gameID',
        loadComponent: () =>
          import('./play-game/play.component').then((m) => m.PlayGameComponent),
        canActivate: [AngularFireAuthGuard],
      },
      {
        path: 'join/:gameID',
        loadComponent: () =>
          import('./player/assign-ticket/assign-ticket.component').then(
            (m) => m.AssignTicketComponent,
          ),
        canActivate: [AngularFireAuthGuard],
      },
      {
        path: 'join',
        loadComponent: () =>
          import('./player/join-game/join-game.component').then(
            (m) => m.JoinGameComponent,
          ),
        canActivate: [],
      },
      {
        path: 'assign/:gameID/ticket/:ticketNumber',
        loadComponent: () =>
          import('./player/assign-ticket/assign-ticket.component').then(
            (m) => m.AssignTicketComponent,
          ),
        canActivate: [],
      },
      {
        path: 'waiting/:gameID/ticket/:ticketID',
        loadComponent: () =>
          import('./player/waiting/waiting.component').then(
            (m) => m.WaitingComponent,
          ),
        canActivate: [],
      },
    ],
  },
];
