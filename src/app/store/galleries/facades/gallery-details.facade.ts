import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {Gallery, GalleryDetailsTab} from "../dependencies";
import {setGalleryId, setTab} from "../actions/gallery-details.actions";
import {Observable} from "rxjs";
import {
    getOpenedGalleryId,
    getOpenGallery,
    getOpenGalleryError,
    getOpenGalleryLoading,
    getTab
} from "../selectors/gallery-details.selectors";

@Injectable()
export class GalleryDetailsFacade {
    constructor(
        private store: Store
    ) {
    }

    public getOpenedGallery$(): Observable<Gallery> {
        return this.store.select(getOpenGallery);
    }

    public getOpenedGalleryId$(): Observable<string> {
        return this.store.select(getOpenedGalleryId);
    }

    public getOpenedGalleryLoading$(): Observable<boolean> {
        return this.store.select(getOpenGalleryLoading);
    }

    public getOpenedGalleryError$(): Observable<any> {
        return this.store.select(getOpenGalleryError);
    }

    public getTab$(): Observable<GalleryDetailsTab> {
        return this.store.select(getTab);
    }

    public onSetGalleryId(galleryId: string): void {
        this.store.dispatch(setGalleryId({ galleryId }))
    }

    public onSetTab(tab: GalleryDetailsTab): void {
        this.store.dispatch(setTab({ tab }))
    }
}
