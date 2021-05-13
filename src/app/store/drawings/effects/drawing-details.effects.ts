import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {setDrawingId} from "../actions/drawing-details.actions";
import {filter, map} from "rxjs/operators";
import {loadDrawingRequested} from "../actions/drawing-data.actions";

@Injectable()
export class DrawingDetailsEffects {
    constructor(
        private actions$: Actions
    ) {
    }

    public setDrawingIdRequested$ = createEffect(
        () => this.actions$
            .pipe(
                ofType(setDrawingId),
                filter(action => !!action.drawingId),
                map(action => {
                  return loadDrawingRequested({
                      drawingId: action.drawingId,
                      withGallery: true,
                      withArtist: true
                  });
                })
            )
    )

}
