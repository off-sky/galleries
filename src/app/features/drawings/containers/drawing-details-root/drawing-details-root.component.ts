import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as fromDeps from '../../dependencies';
import {Observable} from "rxjs";
import {filter, map, take, tap} from "rxjs/operators";

@Component({
  selector: 'app-drawing-details-root',
  template: `
    <app-details-page *ngIf="drawing$ | async; let drawing; else noDrawing;">
      <app-details-page-top>
        {{ drawing.name }}
      </app-details-page-top>
      <app-details-page-body-top>
        <app-drawing-info-top
            [drawing]="drawing"
            [artist]="artist$ | async"
            [gallery]="gallery$ | async"
            [artistDetailsUrl]="artistDetailsUrl$ | async"
            [galleryDetailsUrl]="galleryDetailsUrl$ | async"
        ></app-drawing-info-top>
      </app-details-page-body-top>
      <app-details-page-body-bottom>
        <app-drawing-info-bottom [drawing]="drawing" ></app-drawing-info-bottom>
      </app-details-page-body-bottom>
    </app-details-page>

    <ng-template #noDrawing>
      <ng-container *ngIf="loading$ | async; else noLoading">
        <app-section-spinner></app-section-spinner>
      </ng-container>
      <ng-template #noLoading>
        <ng-container *ngIf="error$ | async">
          Failed to load drawing
        </ng-container>
      </ng-template>
    </ng-template>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DrawingDetailsRootComponent implements OnInit {

  public drawing$: Observable<fromDeps.Drawing>;
  public loading$: Observable<boolean>;
  public error$: Observable<any>;
  public artist$: Observable<fromDeps.Artist>;
  public artistDetailsUrl$: Observable<string>;
  public gallery$: Observable<fromDeps.Gallery>;
  public galleryDetailsUrl$: Observable<string>;

  constructor(
      private detailsFacade: fromDeps.store.DrawingDetailsFacade,
      private artistDetailsRoute: fromDeps.routes.ArtistDetailsRoute,
      private galleryDetailsRoute: fromDeps.routes.GalleryDetailsRoute
  ) { }

  ngOnInit(): void {
    this.drawing$ = this.detailsFacade.getOpenedDrawing$();
    this.loading$ = this.detailsFacade.getOpenedDrawingLoading$();
    this.error$ = this.detailsFacade.getOpenedDrawingError$();
    this.artist$ = this.detailsFacade.getArtistByOpenedDrawing$();
    this.gallery$ = this.detailsFacade.getGalleryByOpenedDrawing$();
    this.artistDetailsUrl$ = this.getArtistDetailsUrl$();
    this.galleryDetailsUrl$ = this.getGalleryDetailsUrl$()
  }

  private getArtistDetailsUrl$(): Observable<string> {
    return this.detailsFacade.getArtistByOpenedDrawing$()
        .pipe(
            filter(artist => !!artist),
            take(1),
            map(artist => {
              return this.artistDetailsRoute.getRelativeUrl({ artistId: artist.id });
            })
        )
  }

  private getGalleryDetailsUrl$(): Observable<string> {
    return this.detailsFacade.getGalleryByOpenedDrawing$()
        .pipe(
            filter(gallery => !!gallery),
            take(1),
            map(gallery => {
              return this.galleryDetailsRoute.getRelativeUrl({ galleryId: gallery.id });
            })
        )
  }

}
