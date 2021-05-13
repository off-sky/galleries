import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {setArtistId} from "../actions/artist-details.actions";
import {loadArtistRequested} from "../actions/artist-data.actions";
import {filter, map} from "rxjs/operators";

@Injectable()
export class ArtistDetailsEffects {

    constructor(
        private actions$: Actions
    ) {
    }

    public setArtistId$ = createEffect(
        () => this.actions$
            .pipe(
                ofType(
                    setArtistId
                ),
                filter(action => !!action.artistId),
                map(action => loadArtistRequested({ artistId: action.artistId }))
            )
    );

}
