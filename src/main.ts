import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// Inicialize o UIKit aqui
import 'uikit';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
