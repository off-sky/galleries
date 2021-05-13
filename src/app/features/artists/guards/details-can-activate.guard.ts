import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {Observable} from 'rxjs';
import * as fromDeps from '../dependencies';
import {map, take} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ArtistDetailsCanActivateGuard implements CanActivate {
  constructor(
      private detailsRoute: fromDeps.routes.ArtistDetailsRoute,
      private detailsFacade: fromDeps.store.ArtistDetailsFacade
  ) {
  }

  canActivate(): Observable<boolean> {
    return this.detailsRoute.parse$()
        .pipe(
            take(1),
            map(data => {
                this.detailsFacade.onSetArtistId(data.artistId);
                this.detailsFacade.onSetTab(data.tab);
              return true;
            })
        )
  }
  
}
