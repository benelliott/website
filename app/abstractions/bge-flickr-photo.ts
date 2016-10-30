import { IBGEFlickrPhotoPayload } from './i-bge-flickr-photo-payload';

export class BGEFlickrPhoto {
    public datetaken: Date;
    public id: string;
    public title: string;
    public url_l: string;
    public url_n: string;

    constructor(payload: IBGEFlickrPhotoPayload) {
        this.datetaken = new Date(payload.datetaken);
        this.id = payload.id;
        this.title = payload.title;
        this.url_l = payload.url_l;
        this.url_n = payload.url_n;
    }
}
