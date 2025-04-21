import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay())]
};


// import { provideRouter, Routes } from '@angular/router';
// import { SummaryViewComponent } from './summary-view/summary-view.component';
// import { DetailedViewComponent } from './detailed-view/detailed-view.component';

// const routes: Routes = [
//   { path: 'Summary', component: SummaryViewComponent },
//   { path: 'Detail', component: DetailedViewComponent },
//   { path: '', redirectTo: 'Summary', pathMatch: 'full' },
// ];

// export const appConfig = {
//   providers: [provideRouter(routes)],
// };
