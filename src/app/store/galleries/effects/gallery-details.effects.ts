import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {setGalleryId} from "../actions/gallery-details.actions";
import {filter, map} from "rxjs/operators";
import {loadGalleryRequested} from "../actions/gallery-data.actions";

@Injectable()
export class GalleryDetailsEffects {
    constructor(
        private actions$: Actions
    ) {}

    public onSetGalleryId$ = createEffect(
        () => this.actions$
            .pipe(
                ofType(setGalleryId),
                filter(action => !!action.galleryId),
                map(action => loadGalleryRequested({ galleryId: action.galleryId }))
            )
    );
}
