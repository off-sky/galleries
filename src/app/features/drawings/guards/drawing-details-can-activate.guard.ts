import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {Observable} from 'rxjs';
import * as fromDeps from '../dependencies';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DrawingDetailsCanActivateGuard implements CanActivate {

  constructor(
      private detailsRoute: fromDeps.routes.DrawingDetailsRoute,
      private detailsFacade: fromDeps.store.DrawingDetailsFacade
  ) {}

  canActivate(): Observable<boolean> {
    return this.detailsRoute.parse$()
        .pipe(
            map(data => {
                this.detailsFacade.onSetDrawingId(data.drawingId);
              return true;
            })
        );
  }
  
}
