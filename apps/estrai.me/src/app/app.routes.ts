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
    loadComponent: () =>
      import('./pages/about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'privacy',
    loadComponent: () =>
      import('./pages/privacy/privacy.component').then(
        (m) => m.PrivacyComponent,
      ),
  },
  {
    path: 'terms',
    loadComponent: () =>
      import('./pages/terms/terms.component').then((m) => m.TermsComponent),
  },
  {
    path: 'unauthorized',
    loadComponent: () =>
      import('./pages/unauthorized/unauthorized.component').then(
        (m) => m.UnauthorizedComponent,
      ),
  },
  {
    path: 'profile',
    loadComponent: () => import('@profile').then((m) => m.ProfileComponent),
    canActivate: [AngularFireAuthGuard],
  },
  {
    path: 'auth',
    loadChildren: () => import('@auth').then((m) => m.AUTH_ROUTES),
  },
  {
    path: 'game',
    loadChildren: () => import('@game').then((m) => m.GAME_ROUTES),
  },
];
