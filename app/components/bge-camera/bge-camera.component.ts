import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { BGEFlickrService } from '../../services/bge-flickr.service';
import { BGEFlickrPhoto } from '../../abstractions/bge-flickr-photo';

@Component({
    selector: 'bge-camera',
    templateUrl: './bge-camera.component.html',
    styleUrls: ['./bge-camera.component.css'],
    animations: [
        trigger('print', [
            transition('void => *', [
                style({
                    top: '500px',
                    transform: 'rotateX(60deg)'
                }),
                animate(100)
            ]),
            transition('* => void', [
                style({
                    top: 0,
                    transform: 'rotateX(5deg)'
                }),
                animate(100)
            ])
        ])
    ]
})
export class BGECameraComponent implements OnInit {
    private static sortPhotosByDate(photos: BGEFlickrPhoto[]): BGEFlickrPhoto[] {
        return photos.sort((a: BGEFlickrPhoto, b: BGEFlickrPhoto) => {
            if (a.datetaken < b.datetaken) {
                return 1;
            }

            if (a.datetaken > b.datetaken) {
                return -1;
            }

            return 0;
        });
    }

    private photos: BGEFlickrPhoto[];
    private selectedPhotoIndex = 0;
    public selectedPhoto: BGEFlickrPhoto;

    constructor(private flickrService: BGEFlickrService) {}

    public ngOnInit(): void {
        this.flickrService
            .getPhotos()
            .subscribe((photos: BGEFlickrPhoto[]) => this.photos = BGECameraComponent.sortPhotosByDate(photos));
    }

    public handlePrintButtonClick(): void {
        if (this.photos) {
            this.selectedPhoto = this.photos[this.selectedPhotoIndex];
            this.selectedPhotoIndex = ++this.selectedPhotoIndex % this.photos.length;
        }
    }
}
