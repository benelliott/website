import { Component, OnInit, OnDestroy } from '@angular/core';
import { BGEFlickrPhoto } from '../../abstractions/bge-flickr-photo';

@Component({
    selector: 'bge-root',
    templateUrl: './bge-root.component.html',
    styleUrls: ['./bge-root.component.css']
})
export class BGERootComponent implements OnInit, OnDestroy {
    private static BACKGROUND_COLOURS: string[] = [
        '#db88bb',
        '#888fdb',
        '#88dbd3',
        '#88dbac',
        '#d4db88'
    ];
    private static BACKGROUND_COLOUR_CHANGE_DELAY_MS: number = 10000;
    private static getRandomBackgroundColour(): string {
        let index = Math.floor(Math.random() * (BGERootComponent.BACKGROUND_COLOURS.length));
        return BGERootComponent.BACKGROUND_COLOURS[index];
    }

    public photo: BGEFlickrPhoto;
    public backgroundColour: string;
    private intervalHandle: number;

    public ngOnInit(): void {
        this.intervalHandle = window.setInterval(() => this.setRandomBackgroundColour(), BGERootComponent.BACKGROUND_COLOUR_CHANGE_DELAY_MS);
        this.setRandomBackgroundColour();
    }

    public ngOnDestroy(): void {
        window.clearInterval(this.intervalHandle);
    }

    private setRandomBackgroundColour(): void {
        let colour: string;
        while ((colour = BGERootComponent.getRandomBackgroundColour()) === this.backgroundColour) {}
        this.backgroundColour = colour;
    }

    public handlePhotoClick(photo: BGEFlickrPhoto): void {
        this.photo = photo;
    }

    public handleModalBackgroundClick(): void {
        this.photo = undefined;
    }
}
