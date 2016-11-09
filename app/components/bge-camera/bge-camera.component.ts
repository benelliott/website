import { Component, EventEmitter, OnInit, Output, trigger, state, style, transition, animate } from '@angular/core';
import { BGEFlickrService } from '../../services/bge-flickr.service';
import { BGEFlickrPhoto } from '../../abstractions/bge-flickr-photo';

@Component({
    selector: 'bge-camera',
    templateUrl: './bge-camera.component.html',
    styleUrls: ['./bge-camera.component.css'],
    animations: [
        trigger('print', [
            state('ready', style({
                transform: 'translate3d(0, -20px, -350px) rotateX(85deg)'
            })),

            state('print', style({
                transform: 'translate3d(0, 0, 0) rotateX(15deg)'
            })),

            state('drop', style({
                transform: 'translate3d(0, 2000px, 100px) rotate(60deg)'
            })),

            transition('ready => print', animate('1200ms ease')),

            transition('print => drop', animate('1000ms ease')),

            transition('drop => ready', animate('300s ease'))

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

    @Output() public photoClick: EventEmitter<BGEFlickrPhoto> = new EventEmitter<BGEFlickrPhoto>();

    public photos: BGEFlickrPhoto[];
    private selectedPhotoIndex = 0;
    private selectedPhoto: BGEFlickrPhoto;

    constructor(private flickrService: BGEFlickrService) {}

    public ngOnInit(): void {
        this.flickrService
            .getPhotos()
            .subscribe((photos: BGEFlickrPhoto[]) => this.photos = BGECameraComponent.sortPhotosByDate(photos));
    }

    public handlePrintButtonClick(): void {
        if (this.photos) {
            if (this.selectedPhoto) {
                this.selectedPhoto.status = 'drop';
            }
            this.selectedPhoto = this.photos[this.selectedPhotoIndex];
            this.selectedPhoto.status = 'print';
            if (this.selectedPhotoIndex === this.photos.length - 1) {
                this.resetPhotoStatus();
                this.selectedPhotoIndex = 0;
                this.selectedPhoto = undefined;
            } else {
                this.selectedPhotoIndex++;
            }
        }
    }

    private resetPhotoStatus(): void {
        this.photos.forEach((photo: BGEFlickrPhoto) => photo.status = 'ready');
    }

    public handlePhotoClick(photo: BGEFlickrPhoto): void {
        this.photoClick.emit(photo);
    }
}
