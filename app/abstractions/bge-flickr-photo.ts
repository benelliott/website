import { IBGEFlickrPhotoPayload } from './i-bge-flickr-photo-payload';

export class BGEFlickrPhoto {
    public datetaken: Date;
    public id: string;
    public title: string;
    public url_h: string;
    public url_n: string;
    public status: string = 'ready';

    constructor(payload: IBGEFlickrPhotoPayload) {
        this.datetaken = new Date(payload.datetaken);
        this.id = payload.id;
        this.title = payload.title;
        this.url_h = payload.url_h;
        this.url_n = payload.url_n;
    }
}
