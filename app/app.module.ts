import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'; 
import { BGECameraComponent } from './components/bge-camera/bge-camera.component';
import { BGEPhotoModalComponent } from './components/bge-photo-modal/bge-photo-modal.component';
import { BGERootComponent } from './components/bge-root/bge-root.component';
import { BGEFlickrService } from './services/bge-flickr.service';

@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [
        BGECameraComponent,
        BGEPhotoModalComponent,
        BGERootComponent
        ],
    providers: [BGEFlickrService],
    bootstrap: [BGERootComponent]
})
export class BGEModule {

}
