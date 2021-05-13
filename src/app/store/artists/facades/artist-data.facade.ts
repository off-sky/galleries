import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {Artist} from "../dependencies";

import {loadArtistRequested} from "../actions/artist-data.actions";
import {getArtist, getArtistError, getArtistLoading} from "../selectors/artist-data.selectors";
import {Injectable} from "@angular/core";

@Injectable()
export class ArtistDataFacade {
    constructor(
        private store: Store
    ) {
    }

    public getArtist$(artistId: string): Observable<Artist> {
        return this.store.select(getArtist, { artistId });
    }

    public getArtistLoading$(artistId: string): Observable<boolean> {
        return this.store.select(getArtistLoading, { artistId });
    }

    public getArtistError$(artistId: string): Observable<any> {
        return this.store.select(getArtistError, { artistId });
    }

    public onLoaddArtistRequested(artistId: string): void {
        this.store.dispatch(loadArtistRequested({ artistId }));
    }
}
