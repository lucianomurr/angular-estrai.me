import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import {
  PreloadAllModules,
  provideRouter,
  withPreloading,
} from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { AuthService, ProfileService, UserService } from '@data-access';
import { environment } from '../environments/environment';
import { FirestoreModule } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics } from '@angular/fire/analytics';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      APP_ROUTES,
      withPreloading(PreloadAllModules),
      // withDebugTracing(),
    ),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
    provideAuth(() => getAuth()),
    provideAnalytics(() => getAnalytics()),
    importProvidersFrom(
      FirestoreModule,
      AuthService,
      ProfileService,
      UserService,
    ),
  ],
};
