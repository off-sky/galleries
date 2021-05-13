import {Injectable} from "@angular/core";
import {DrawingListFilter, DrawingListName} from "../dependencies";
import {Store} from "@ngrx/store";
import {listInitialized, setFilters} from "../actions/drawing-list.actions";
import {Observable} from "rxjs";
import {getListError, getListItems, getListLoading} from "../selectors/drawing-list.selectors";

@Injectable()
export class DrawingListFacade {

    constructor(
        private store: Store
    ) {
    }

    public getListLoading$(listName: DrawingListName): Observable<boolean> {
        return this.store.select(getListLoading, { listName });
    }

    public getListError$(listName: DrawingListName): Observable<any> {
        return this.store.select(getListError, { listName });
    }

    public getListItems$(listName: DrawingListName): Observable<string[]> {
        return this.store.select(getListItems, { listName });
    }

    public onListInitialized(listName: DrawingListName): void {
        this.store.dispatch(listInitialized({listName}))
    }

    public onSetFilters(listName: DrawingListName, filters: DrawingListFilter[]): void {
        this.store.dispatch(setFilters({listName, filters}))
    }
}
