import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap} from "rxjs/operators";
import {of} from "rxjs";
import {ArtistsApiService} from "../artists-api.service";
import {loadArtistFailed, loadArtistRequested, loadArtistSuccess} from "../actions/artist-data.actions";
import {Artist, utils} from "../dependencies";

@Injectable()
export class ArtistDataEffects {

    constructor(
        private actions$: Actions,
        private api: ArtistsApiService
    ) {
    }

    public loadArtistRequested$ = createEffect(
        () => this.actions$
            .pipe(
                ofType(loadArtistRequested),
                mergeMap(action => {
                    const { artistId } = action;
                    return this.api.getArtist(artistId)
                        .pipe(
                            map((artist: Artist )=> loadArtistSuccess({ artist })),
                            catchError(error => {
                                utils.handleError(error);
                                return of(loadArtistFailed({ artistId, error }));
                            })
                        )
                })
            )
    )
}
