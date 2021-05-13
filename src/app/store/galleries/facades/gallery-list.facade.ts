import {Injectable} from "@angular/core";
import {GalleryListFilter, GalleryListName} from "../dependencies";
import {Store} from "@ngrx/store";
import {listInitialized, setFilters} from "../actions/gallery-list.actions";
import {Observable} from "rxjs";
import {getListError, getListItems, getListLoading} from "../selectors/gallery-list.selectors";

@Injectable()
export class GalleryListFacade {

    constructor(
        private store: Store
    ) {
    }

    public getListLoading$(listName: GalleryListName): Observable<boolean> {
        return this.store.select(getListLoading, { listName });
    }

    public getListError$(listName: GalleryListName): Observable<any> {
        return this.store.select(getListError, { listName });
    }

    public getListItems$(listName: GalleryListName): Observable<string[]> {
        return this.store.select(getListItems, { listName });
    }

    public onListInitialized(listName: GalleryListName): void {
        this.store.dispatch(listInitialized({listName}))
    }

    public onSetFilters(listName: GalleryListName, filters: GalleryListFilter[]): void {
        this.store.dispatch(setFilters({listName, filters}))
    }
}
