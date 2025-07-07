import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import {
  withInMemoryScrolling,
  withEnabledBlockingInitialNavigation,
  withViewTransitions,
} from '@angular/router';

import { AuthService, ProfileService, UserService } from '@data-access';
import { environment } from '../environments/environment';
import { FirestoreModule } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics } from '@angular/fire/analytics';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFileRouter, withDebugRoutes } from '@analogjs/router';

import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { withNavigationErrorHandler } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideFileRouter(
      withInMemoryScrolling({ anchorScrolling: 'enabled' }),
      withEnabledBlockingInitialNavigation(),
      withNavigationErrorHandler(console.error),
      withViewTransitions(),
      withDebugRoutes(),
    ),

    provideClientHydration(withEventReplay()),
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
