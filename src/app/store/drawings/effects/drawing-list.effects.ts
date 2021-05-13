import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {
    listInitialized,
    loadListFailed,
    loadListRequested,
    loadListSuccess,
    setFilters
} from "../actions/drawing-list.actions";
import {catchError, debounceTime, filter, map, switchMap, take} from "rxjs/operators";
import {DrawingListName, utils} from "../dependencies";
import {Observable, of} from "rxjs";
import {Action, Store} from "@ngrx/store";
import {getFilters} from "../selectors/drawing-list.selectors";
import {DrawingsApiService} from "../drawings-api.service";
import {drawingListNames} from "../reducers/drawing-list.reducer";

@Injectable()
export class DrawingListEffects {

    constructor(
        private actions$: Actions,
        private store: Store<any>,
        private api: DrawingsApiService
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
        drawingListNames.forEach(listName => {
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

    private onLoadListRequested(listName: DrawingListName): Observable<Action> {
        return this.store.select(getFilters, { listName })
            .pipe(
                take(1),
                switchMap(filters => {
                    return this.api.getDrawingList(filters)
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
