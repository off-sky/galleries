import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {loadDrawingFailed, loadDrawingRequested, loadDrawingSuccess} from "../actions/drawing-data.actions";
import {catchError, filter, map, mergeMap} from "rxjs/operators";
import {DrawingsApiService} from "../drawings-api.service";
import {utils, store } from "../dependencies";
import {of} from "rxjs";

@Injectable()
export class DrawingDataEffects {

    constructor(
        private actions$: Actions,
        private api: DrawingsApiService
    ) {
    }

    public loadDrawingRequested$ = createEffect(
        () => this.actions$
            .pipe(
                ofType(loadDrawingRequested),
                mergeMap(action => {
                    const { drawingId } = action;
                    return this.api.getDrawing(drawingId, action.withArtist, action.withGallery)
                        .pipe(
                            map(response => loadDrawingSuccess({ ...response })),
                            catchError(error => {
                                utils.handleError(error);
                                return of(loadDrawingFailed({ drawingId, error }));
                            })
                        )
                })
            )
    );

    /**
     * Save gallery, if loaded with a drawing
     */
    public loadDrawingSuccessForSaveGallery$ = createEffect(
        () => this.actions$
            .pipe(
                ofType(loadDrawingSuccess),
                filter(action => !!action.gallery),
                map(action => store.loadGallerySuccess({ gallery: action.gallery }))
            )
    );

    /**
     * Save artist, if loaded with a drawing
     */
    public loadDrawingSuccessForSaveArtist$ = createEffect(
        () => this.actions$
            .pipe(
                ofType(loadDrawingSuccess),
                filter(action => !!action.artist),
                map(action => store.loadArtistSuccess({ artist: action.artist }))
            )
    );

}
