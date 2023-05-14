import { importProvidersFrom, isDevMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app/app.component';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics } from '@angular/fire/analytics';
import { environment } from './environments/environment';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';
import { APP_ROUTES } from './app/app.routes';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { AuthService } from '@auth';
import { ServiceWorkerModule } from '@angular/service-worker';
import {AngularFireMessagingModule} from "@angular/fire/compat/messaging";

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      APP_ROUTES,
      withPreloading(PreloadAllModules)
      // withDebugTracing(),
    ),
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(provideFirebaseApp(() => initializeApp(environment.firebase))),
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
    importProvidersFrom(provideFirestore(() => getFirestore())),
    importProvidersFrom(provideAuth(() => getAuth())),
    importProvidersFrom(provideAnalytics(() => getAnalytics())),
    importProvidersFrom(AuthService),
    importProvidersFrom(ServiceWorkerModule.register('combined-sw.js', { enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000' })),
    importProvidersFrom(AngularFireMessagingModule)
  ],
});
