import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as fromDeps from '../../dependencies';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-gallery-tab-drawing-root',
  template: `
    <app-drawing-list [listName]="listName" [galleryIds]="galleryIds$ | async" (itemClicked)="onDrawingClicked($event)"></app-drawing-list>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryTabDrawingRootComponent implements OnInit {

  public listName = fromDeps.DrawingListName.GALLERY_DETAILS_DRAWING_LIST;
  public galleryIds$: Observable<string[]>;

  constructor(
      private detailsFacade: fromDeps.store.GalleryDetailsFacade,
      private drawingDetailsRoute: fromDeps.routes.DrawingDetailsRoute
  ) { }

  ngOnInit(): void {
    this.galleryIds$ = this.detailsFacade.getOpenedGalleryId$()
        .pipe(
            map(galleryId => [galleryId])
        )
  }

  public onDrawingClicked(drawingId: string): void {
    this.drawingDetailsRoute.navigate({ drawingId });
  }

}
