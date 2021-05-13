import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {api, Artist, convertors, Drawing, DrawingListFilter, Gallery} from "./dependencies";
import {map} from "rxjs/operators";

@Injectable()
export class DrawingsApiService {

  constructor(
      private baseApi: api.BaseApiService
  ) { }

  public getDrawing(drawingId: string, withArtist?: boolean, withGallery?: boolean): Observable<{
    drawing: Drawing;
    artist?: Artist;
    gallery?: Gallery
  }> {
    return this.baseApi.getDrawing({ drawingId, withArtist, withGallery })
        .pipe(
            map(response => {
              return {
                drawing: response.drawing,
                artist: response.artist ? convertors.getArtistFromApi(response.artist) : undefined,
                gallery: response.gallery
              }
            })
        );
  }

  public getDrawingList(filters: DrawingListFilter[]): Observable<string[]> {
    const request = convertors.getDrawingsListRequest(filters);
    return this.baseApi.getEntityList(request);
  }
}
