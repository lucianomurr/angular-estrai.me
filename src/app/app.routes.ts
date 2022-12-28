import { Routes } from "@angular/router";
import { IndexComponent } from './pages/index/index.component';

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
        path: 'players',
        loadComponent: () => import('./pages/game/game.component').then(m => m.GameComponent)
    },
];
