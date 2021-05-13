import {Injectable} from "@angular/core";
import {galleryListNames} from "../reducers/gallery-list.reducer";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {
    listInitialized,
    loadListFailed,
    loadListRequested,
    loadListSuccess,
    setFilters
} from "../actions/gallery-list.actions";
import {catchError, debounceTime, filter, map, switchMap, take} from "rxjs/operators";
import {GalleryListName, utils} from "../dependencies";
import {Observable, of} from "rxjs";
import {Action, Store} from "@ngrx/store";
import {getFilters} from "../selectors/gallery-list.selectors";
import {GalleriesApiService} from "../galleries-api.service";

@Injectable()
export class GalleryListEffects {

    constructor(
        private actions$: Actions,
        private store: Store<any>,
        private api: GalleriesApiService
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
        galleryListNames.forEach(listName => {
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

    private onLoadListRequested(listName: GalleryListName): Observable<Action> {
        return this.store.select(getFilters, { listName })
            .pipe(
                take(1),
                switchMap(filters => {
                    return this.api.getGalleryList(filters)
                        .pipe(
                            map(items => loadListSuccess({ listName, items })),
                            catchError(error => {
                                utils.handleError(error);
                                return of(loadListFailed({ listName, error }))
                            })
                        )
                })
            )
    }
}
