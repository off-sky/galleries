import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {getListError, getListItems, getListLoading} from "../selectors/artist-list.selectors";
import {listInitialized, setFilters} from "../actions/artist-list.actions";
import {Store} from "@ngrx/store";
import {ArtistListFilter, ArtistListNames} from "../dependencies";

@Injectable()
export class ArtistListsFacade {

    constructor(
        private store: Store
    ) {
    }

    public getListLoading$(listName: ArtistListNames): Observable<boolean> {
        return this.store.select(getListLoading, { listName });
    }

    public getListError$(listName: ArtistListNames): Observable<any> {
        return this.store.select(getListError, { listName });
    }

    public getListItems$(listName: ArtistListNames): Observable<string[]> {
        return this.store.select(getListItems, { listName });
    }

    public onListInitialized(listName: ArtistListNames): void {
        this.store.dispatch(listInitialized({listName}))
    }

    public onSetFilters(listName: ArtistListNames, filters: ArtistListFilter[]): void {
        this.store.dispatch(setFilters({listName, filters}))
    }
}
