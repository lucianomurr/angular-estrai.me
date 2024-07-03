import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import {
  PreloadAllModules,
  provideRouter,
  withPreloading,
} from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { AuthService, ProfileService, UserService } from '@data-access';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics } from '@angular/fire/analytics';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      APP_ROUTES,
      withPreloading(PreloadAllModules),
      // withDebugTracing(),
    ),
    importProvidersFrom(
      provideFirebaseApp(() => initializeApp(environment.firebase)),
    ),
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
    importProvidersFrom(provideFirestore(() => getFirestore())),
    importProvidersFrom(provideAuth(() => getAuth())),
    importProvidersFrom(provideAnalytics(() => getAnalytics())),
    importProvidersFrom(AuthService, ProfileService, UserService),
  ],
};
