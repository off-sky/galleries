import {Observable} from "rxjs";
import {GalleryListFilter, convertors, api, Gallery} from "./dependencies";
import {Injectable} from "@angular/core";

@Injectable()
export class GalleriesApiService {

    constructor(
        private baseApi: api.BaseApiService
    ) {
    }

    public getGalleryList(filters?: GalleryListFilter[]): Observable<string[]> {
        const request = convertors.getGalleryListRequest(filters)
        return this.baseApi.getEntityList(request);
    }

    public getGallery(galleryId: string): Observable<Gallery> {
        return this.baseApi.getGallery(galleryId);
    }
}
