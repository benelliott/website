import { Component, OnInit } from '@angular/core';
import { BGEFlickrService } from '../../services/bge-flickr.service';
import { BGEFlickrPhoto } from '../../abstractions/bge-flickr-photo';

@Component({
    selector: 'bge-camera',
    templateUrl: './bge-camera.component.html',
    styleUrls: ['./bge-camera.component.css']
})
export class BGECameraComponent implements OnInit {
    constructor(private flickrService: BGEFlickrService) {}

    public ngOnInit(): void {
        this.flickrService.getPhotos().subscribe((photos: BGEFlickrPhoto[]) => console.log(photos));
    }
}
