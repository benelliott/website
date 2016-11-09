import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { IBGEFlickrPhotoPayload } from '../abstractions/i-bge-flickr-photo-payload';
import { BGEFlickrPhoto } from '../abstractions/bge-flickr-photo';

@Injectable()
export class BGEFlickrService {
    private static API_BASE_URL: string = 'https://api.flickr.com/services/rest/';
    private static API_KEY: string = '9d40d43d5e9556dcd0c0f88e03bd2bac';
    private static USER_ID: string = '126927280@N03';
    private static PHOTOSET_ID: string = '72157651535855796';

    constructor(private http: Http) {
    }

    public getPhotos(): Observable<BGEFlickrPhoto[]> {
        let params = new URLSearchParams();
        params.append('api_key', BGEFlickrService.API_KEY);
        params.append('photoset_id', BGEFlickrService.PHOTOSET_ID);
        params.append('user_id', BGEFlickrService.USER_ID);
        params.append('method', 'flickr.photosets.getPhotos');
        params.append('extras', 'url_n,url_h,date_taken');
        params.append('format', 'json');
        params.append('nojsoncallback', '1');

        return this.http
            .get(BGEFlickrService.API_BASE_URL, {search: params})
            .map((response: Response) => (<IBGEFlickrPhotoPayload[]>response.json().photoset.photo).map((p: IBGEFlickrPhotoPayload) => new BGEFlickrPhoto(p)));
    }
}