import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {setArtistId, setTab} from "../actions/artist-details.actions";
import {Artist, ArtistDetailsTab} from "../dependencies";
import {Observable} from "rxjs";
import {
    getArtistId,
    getOpenedArtist,
    getOpenedArtistError,
    getOpenedArtistLoading,
    getTab
} from "../selectors/artist-details.selectors";

@Injectable()
export class ArtistDetailsFacade {

    constructor(
        private store: Store
    ) {
    }

    public getOpenedArtist$(): Observable<Artist> {
        return this.store.select(getOpenedArtist);
    }

    public getOpenedArtistId$(): Observable<string> {
        return this.store.select(getArtistId);
    }

    public getOpenedArtistLoading$(): Observable<boolean> {
        return this.store.select(getOpenedArtistLoading);
    }

    public getOpenedArtistError$(): Observable<any> {
        return this.store.select(getOpenedArtistError);
    }

    public getTab$(): Observable<ArtistDetailsTab> {
        return this.store.select(getTab);
    }

    public onSetArtistId(artistId: string): void {
        this.store.dispatch(setArtistId({ artistId }));
    }

    public onSetTab(tab: ArtistDetailsTab): void {
        this.store.dispatch(setTab({ tab }));
    }
}
