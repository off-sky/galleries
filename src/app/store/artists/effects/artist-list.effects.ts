import {Injectable} from "@angular/core";
import {ArtistsApiService} from "../artists-api.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {
    listInitialized,
    loadListFailed,
    loadListRequested,
    loadListSuccess,
    setFilters
} from "../actions/artist-list.actions";
import {catchError, debounceTime, filter, map, switchMap, take} from "rxjs/operators";
import {Observable, of} from "rxjs";
import {Action, Store} from "@ngrx/store";
import {getFilters} from "../selectors/artist-list.selectors";
import {artistListNames} from "../reducers/artist-list.reducers";
import {ArtistListNames, utils} from "../dependencies";

@Injectable()
export class ArtistListEffects {

    constructor(
        private actions$: Actions,
        private api: ArtistsApiService,
        private store: Store<any>
    ) {
        this.setLoadListEffects();
    }

    public onListChanged$ = createEffect(
        () => this.actions$
            .pipe(
                ofType(setFilters, listInitialized),
                map(action => {
                    const { listName } = action;
                    return loadListRequested({ listName })
                })
            )
    );

    private setLoadListEffects(): void {
        artistListNames.forEach(listName => {
            this[`${listName}_loaded`] = createEffect(
                () => this.actions$
                    .pipe(
                        ofType(loadListRequested),
                        filter(action => action.listName === listName),
                        debounceTime(200),
                        switchMap(action => {
                            const {listName} = action;
                            return this.onLoadListRequested(listName);
                        })
                    )
            )
        })
    }

    private onLoadListRequested(listName: ArtistListNames): Observable<Action> {
        return this.store.select(getFilters, { listName })
            .pipe(
                take(1),
                switchMap(filters => {
                    return this.api.getArtistList(filters)
                        .pipe(
                            map(items => loadListSuccess({ listName, items }))
                        )
                }),
                catchError(error => {
                    utils.handleError(error);
                    return of(loadListFailed({ listName, error }))
                })
            )
    }
}
