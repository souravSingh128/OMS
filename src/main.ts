import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {VERSION as MAT_VERSION} from '@angular/material/core';

if (environment.production) {
  enableProdMode();
}

console.info('Angular Material version', MAT_VERSION.full);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
