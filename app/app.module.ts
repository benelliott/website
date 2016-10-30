import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BGERootComponent } from './components/bge-root/bge-root.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [BGERootComponent],
    providers: [],
    bootstrap: [BGERootComponent]
})
export class BGEModule {

}
