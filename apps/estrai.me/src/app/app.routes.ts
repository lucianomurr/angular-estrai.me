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
    path: 'privacy',
    loadComponent: () => import('./pages/privacy/privacy.component').then(m => m.PrivacyComponent),
  },
  {
    path: 'auth',
    loadChildren: () => import('@auth').then(m => m.AUTH_ROUTES),
  },
  {
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile.component').then(m => m.ProfileComponent),
    canActivate: [AngularFireAuthGuard],
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
    canActivate: [AngularFireAuthGuard],
  },
  {
    path: 'game/join',
    loadComponent: () => import('./pages/game/join-game/join-game.component').then(m => m.JoinGameComponent),
    canActivate: [AngularFireAuthGuard],
  },
  {
    path: 'game/assign/:ticketNumber',
    loadComponent: () =>
      import('./pages/game/assign-ticket/assign-ticket.component').then(m => m.AssignTicketComponent),
    canActivate: [AngularFireAuthGuard],
  },
  {
    path: 'game/waiting/:ticketNumber',
    loadComponent: () => import('./pages/game/waiting/waiting.component').then(m => m.WaitingComponent),
    canActivate: [AngularFireAuthGuard],
  },
];
