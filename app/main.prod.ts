import { platformBrowser } from '@angular/platform-browser';
import { BGEModuleNgFactory } from './aot/app/app.module.ngfactory';

platformBrowser().bootstrapModuleFactory(BGEModuleNgFactory);