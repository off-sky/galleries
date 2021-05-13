import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as fromDeps from '../../dependencies';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-gallery-tab-artist-root',
  template: `
    <app-artist-list [listName]="listName" [galleryIds]="galleryIds$ | async"
                     (listItemClicked)="onArtistClicked($event)">
    </app-artist-list>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryTabArtistRootComponent implements OnInit {

  public listName = fromDeps.ArtistListNames.GALLERY_DETAILS_ARTIST_LIST;
  public galleryIds$: Observable<string[]>;

  constructor(
      private galleryDetailsFacade: fromDeps.store.GalleryDetailsFacade,
      private artistDetailsRoute: fromDeps.routes.ArtistDetailsRoute
  ) { }

  ngOnInit(): void {
    this.galleryIds$ = this.galleryDetailsFacade.getOpenedGalleryId$()
        .pipe(
            map(galleryId => [galleryId])
        )
  }

  public onArtistClicked(artistId: string): void {
    this.artistDetailsRoute.navigate({ artistId });
  }

}
