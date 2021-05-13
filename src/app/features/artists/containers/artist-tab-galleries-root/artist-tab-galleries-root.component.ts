import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as fromDeps from '../../dependencies';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-artist-tab-galleries-root',
  template: `
    <app-gallery-list [listName]="galleryListName" [artistIds]="artistIds$ | async"
                      (itemClicked)="onGalleryItemClicked($event)"
        >
    </app-gallery-list>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArtistTabGalleriesRootComponent implements OnInit {

  public galleryListName = fromDeps.GalleryListName.ARTIST_DETAILS_GALLERY_LIST;
  public artistIds$: Observable<string[]>;

  constructor(
      private detailsFacade: fromDeps.store.ArtistDetailsFacade,
      private galleryDetailsRoute: fromDeps.routes.GalleryDetailsRoute
  ) { }

  ngOnInit(): void {
    this.artistIds$ = this.detailsFacade.getOpenedArtistId$()
        .pipe(
            map(artistId => [artistId])
        );
  }

  public onGalleryItemClicked(galleryId: string): void {
    this.galleryDetailsRoute.navigate({ galleryId });
  }

}
