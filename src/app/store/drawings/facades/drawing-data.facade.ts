import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {loadDrawingRequested} from "../actions/drawing-data.actions";
import {Observable} from "rxjs";
import {Drawing} from "../dependencies";
import {getDrawing, getDrawingError, getDrawingLoading} from "../selectors/drawing-data.selectors";

@Injectable()
export class DrawingDataFacade {

    constructor(
        private store: Store
    ) {
    }

    public getDrawing$(drawingId: string): Observable<Drawing> {
        return this.store.select(getDrawing, { drawingId });
    }

    public getDrawingLoading$(drawingId: string): Observable<boolean> {
        return this.store.select(getDrawingLoading, { drawingId });
    }

    public getDrawingError$(drawingId: string): Observable<any> {
        return this.store.select(getDrawingError, { drawingId });
    }

    public onLoadDrawingRequested(drawingId: string,  withArtist?: boolean, withGallery?: boolean): void {
        this.store.dispatch(loadDrawingRequested({ drawingId, withArtist, withGallery }));
    }
}
