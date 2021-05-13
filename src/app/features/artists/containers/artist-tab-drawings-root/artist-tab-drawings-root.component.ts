import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as fromDeps from '../../dependencies';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-artist-tab-drawings-root',
  template: `
    <app-drawing-list [listName]="drawingListName"
                      [artistIds]="artistIds$ | async"
                      (itemClicked)="onDrawingItemClicked($event)">
    </app-drawing-list>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArtistTabDrawingsRootComponent implements OnInit {

  public drawingListName = fromDeps.DrawingListName.ARTIST_DETAILS_DRAWING_LIST;
  public artistIds$: Observable<string[]>;

  constructor(
      private detailsFacade: fromDeps.store.ArtistDetailsFacade,
      private drawingDetailsRoute: fromDeps.routes.DrawingDetailsRoute
  ) { }

  ngOnInit(): void {
    this.artistIds$ = this.detailsFacade.getOpenedArtistId$()
        .pipe(
            map(artistId => [artistId])
        )
  }

  public onDrawingItemClicked(drawingId: string): void {
    this.drawingDetailsRoute.navigate({ drawingId });
  }

}
