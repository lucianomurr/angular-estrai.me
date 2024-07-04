import { Routes } from '@angular/router';
import { AuthComponent } from './auth.component';

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    component: AuthComponent,
    providers: [],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'log-in',
      },
      {
        path: 'log-in',
        loadComponent: () => import('./log-in/log-in.component').then(m => m.LogInComponent),
      },
      // {
      //   path: 'sign-up',
      //   loadComponent: () => import('./sign-up/sign-up.component').then(m => m.SignUpComponent),
      // },
    ],
  },
];
