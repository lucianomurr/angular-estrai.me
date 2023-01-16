import { Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

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
        path: 'sign-up',
        component: SignUpComponent,
      },
      {
        path: 'log-in',
        component: LogInComponent,
      },
    ],
  },
];
