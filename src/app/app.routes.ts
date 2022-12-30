import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';

export const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: IndexComponent,
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
  },
  {
    path: 'new-game',
    loadComponent: () => import('./pages/game/new-game/new-game.component').then(m => m.NewGameComponent),
    canActivate: [AngularFireAuthGuard],
  },
  {
    path: 'game/manage/:gameID',
    loadComponent: () => import('./pages/game/play-game/play.component').then(m => m.PlayGameComponent),
    canActivate: [AngularFireAuthGuard],
  },
  {
    path: 'game/join/:gameID',
    loadComponent: () =>
      import('./pages/game/assign-ticket/assign-ticket.component').then(m => m.AssignTicketComponent),
  },
  {
    path: 'game/join',
    loadComponent: () => import('./pages/game/join-game/join-game.component').then(m => m.JoinGameComponent),
  },
];
