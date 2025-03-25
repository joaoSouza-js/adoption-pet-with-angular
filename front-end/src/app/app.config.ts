import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHotToastConfig } from '@ngneat/hot-toast';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHotToastConfig({
      position:"bottom-right"
    }),
    provideRouter(routes),
    provideHttpClient(withFetch()),
  ],
};
