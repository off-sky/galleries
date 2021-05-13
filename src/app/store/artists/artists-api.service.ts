import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Artist, ArtistListFilter, convertors, api} from "./dependencies";
import {map} from "rxjs/operators";

@Injectable()
export class ArtistsApiService {

    constructor(
        private baseApi: api.BaseApiService
    ) {
    }

    public getArtist(artistId: string): Observable<Artist> {
        return this.baseApi.getArtist(artistId)
            .pipe(
                map(source => convertors.getArtistFromApi(source))
            );
    }

    public getArtistList(filters?: ArtistListFilter[]): Observable<string[]> {
        const request = convertors.getArtistListRequest(filters);
        return this.baseApi.getEntityList(request);
    }
}
