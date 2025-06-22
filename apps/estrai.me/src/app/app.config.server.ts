import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering, withAppShell, withRoutes } from '@angular/ssr';
import { appConfig } from './app.config';
import { SERVER_ROUTES } from './app.routes.server';
import { AppComponent } from './app.component';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(
      withRoutes(SERVER_ROUTES),
      withAppShell(AppComponent),
    ),
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
