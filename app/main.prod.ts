import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { BGEModuleNgFactory } from './aot/app/app.module.ngfactory';

enableProdMode();
platformBrowser().bootstrapModuleFactory(BGEModuleNgFactory);