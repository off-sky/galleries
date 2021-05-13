import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {setDrawingId} from "../actions/drawing-details.actions";
import {Observable} from "rxjs";
import {Artist, Drawing, Gallery} from "../dependencies";
import {
    getArtistByOpenDrawing,
    getGalleryByOpenDrawing,
    getOpenedDrawing,
    getOpenedDrawingError,
    getOpenedDrawingLoading
} from "../selectors/drawing-details.selectors";

@Injectable()
export class DrawingDetailsFacade {

    constructor(
        private store: Store
    ) {
    }

    public getOpenedDrawing$(): Observable<Drawing> {
        return this.store.select(getOpenedDrawing);
    }

    public getOpenedDrawingLoading$(): Observable<boolean> {
        return this.store.select(getOpenedDrawingLoading);
    }

    public getOpenedDrawingError$(): Observable<any> {
        return this.store.select(getOpenedDrawingError);
    }

    public getArtistByOpenedDrawing$(): Observable<Artist> {
        return this.store.select(getArtistByOpenDrawing);
    }

    public getGalleryByOpenedDrawing$(): Observable<Gallery> {
        return this.store.select(getGalleryByOpenDrawing);
    }

    public onSetDrawingId(drawingId: string): void {
        this.store.dispatch(setDrawingId({ drawingId }))
    }
}
