import { Component, Input } from '@angular/core';
import { BGEFlickrPhoto } from '../../abstractions/bge-flickr-photo';

@Component({
    selector: 'bge-photo-modal',
    templateUrl: './bge-photo-modal.component.html',
    styleUrls: ['./bge-photo-modal.component.css']
})
export class BGEPhotoModalComponent {
    @Input() public photo: BGEFlickrPhoto;
}