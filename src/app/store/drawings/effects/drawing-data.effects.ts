import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {loadGalleryFailed, loadGalleryRequested, loadGallerySuccess} from "../actions/gallery-data.actions";
import {catchError, map, mergeMap} from "rxjs/operators";
import {GalleriesApiService} from "../galleries-api.service";
import {utils} from "../dependencies";
import {of} from "rxjs";

@Injectable()
export class GalleryDataEffects {

    constructor(
        private actions$: Actions,
        private api: GalleriesApiService
    ) {
    }

    public loadGalleryRequested$ = createEffect(
        () => this.actions$
            .pipe(
                ofType(loadGalleryRequested),
                mergeMap(action => {
                    const { galleryId } = action;
                    return this.api.getGallery(galleryId)
                        .pipe(
                            map(gallery => loadGallerySuccess({ gallery })),
                            catchError(error => {
                                utils.handleError(error);
                                return of(loadGalleryFailed({ galleryId, error }));
                            })
                        )
                })
            )
    )
}
