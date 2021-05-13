import { Injectable } from '@angular/core';
import {BackendService} from "./backend/backend.service";
import * as fromEndpoints from './endpoints';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BaseApiService {

  constructor(
      private backend: BackendService
  ) { }

  public getArtist(request: fromEndpoints.getArtist.GetArtistRequest): Observable<fromEndpoints.getArtist.GetArtistResponse> {
    return this.backend.request('getArtist', request);
  }

  public getDrawing(request: fromEndpoints.getDrawing.GetDrawingRequest): Observable<fromEndpoints.getDrawing.GetDrawingResponse> {
    return this.backend.request('getDrawing', request);
  }

  public getEntityList(
      request: fromEndpoints.getEntityList.GetEntityListRequest
  ): Observable<fromEndpoints.getEntityList.GetEntityListResponse> {
    return this.backend.request('getEntityList', request);
  }

  public getGallery(request: fromEndpoints.getGallery.GetGalleryRequest): Observable<fromEndpoints.getGallery.GetGalleryResponse> {
    return this.backend.request('getGallery', request);
  }

}
