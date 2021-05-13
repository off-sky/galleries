import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {Observable} from 'rxjs';
import * as fromDeps from '../dependencies';
import {map, take} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GalleryDetailsCanActivateGuard implements CanActivate {

  constructor(
      private detailsFacade: fromDeps.store.GalleryDetailsFacade,
      private detailsRoute: fromDeps.routes.GalleryDetailsRoute
  ) {
  }
  canActivate(): Observable<boolean> {
    return this.detailsRoute.parse$()
        .pipe(
            take(1),
            map(data => {
              this.detailsFacade.onSetGalleryId(data.galleryId);
              this.detailsFacade.onSetTab(data.tab);
              return true;
            })
        )
  }
  
}
