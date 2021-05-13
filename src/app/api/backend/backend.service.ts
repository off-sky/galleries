import {Injectable} from '@angular/core';
import {Observable, of, throwError} from "rxjs";
import {getEntityList} from "./get-entity-list";
import {getArtist} from "./get-artist";
import {getDrawing} from "./get-drawing";
import {getGallery} from "./get-gallery";
import {delay, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }

  public request(apiName: string, request: any): Observable<any> {
      try {
          console.log('Request: ', apiName, ' ', request );
          const response = this.routeRequest(apiName, request);
          // simulate network latency, 200-1200 millis
          const delayValue = Math.random() * 1000 + 200;
          return of(response)
              .pipe(delay(delayValue), tap(response => console.log('Response: ', apiName, ' ', response)))

      } catch (error) {
          console.log('Error: ', apiName, error);
          return throwError(error);
      }

  }

  private routeRequest(apiName: string, request: any): any {
    switch (apiName) {
      case 'getEntityList': return getEntityList(request);
      case 'getArtist': return getArtist(request);
      case 'getDrawing': return getDrawing(request);
      case 'getGallery': return getGallery(request);
      default: return { error: 'Unknown request' };
    }
  }
}
