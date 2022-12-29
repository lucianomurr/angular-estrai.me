import { Routes } from "@angular/router";
import { IndexComponent } from './pages/index/index.component';
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';


export const APP_ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: IndexComponent
    },
    {
        path: 'about',
        loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
    },
    {
        path: 'new-game',
        loadComponent: () => import('./pages/new-game/new-game.component').then(m => m.NewGameComponent),
        canActivate: [AngularFireAuthGuard]
    },
    {
      path: 'game/:gameID',
      loadComponent: () => import('./pages/play/play.component').then(m => m.PlayComponent),
      canActivate: [AngularFireAuthGuard]
  },
];
