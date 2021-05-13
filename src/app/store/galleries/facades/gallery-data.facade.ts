import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {loadGalleryRequested} from "../actions/gallery-data.actions";
import {Observable} from "rxjs";
import {Gallery} from "../dependencies";
import {getGallery, getGalleryError, getGalleryLoading} from "../selectors/gallery-data.selectors";

@Injectable()
export class GalleryDataFacade {

    constructor(
        private store: Store
    ) {
    }

    public getGallery$(galleryId: string): Observable<Gallery> {
        return this.store.select(getGallery, { galleryId });
    }

    public getGalleryLoading$(galleryId: string): Observable<boolean> {
        return this.store.select(getGalleryLoading, { galleryId });
    }

    public getGalleryError$(galleryId: string): Observable<any> {
        return this.store.select(getGalleryError, { galleryId });
    }

    public onLoadGalleryRequested(galleryId: string): void {
        this.store.dispatch(loadGalleryRequested({ galleryId }));
    }
}
