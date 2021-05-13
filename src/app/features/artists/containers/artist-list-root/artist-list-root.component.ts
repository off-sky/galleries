import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as fromDeps from '../../dependencies';

@Component({
  selector: 'app-artist-list-root',
  template: `
    <app-list-page>
      <app-list-page-header>
        Artists
      </app-list-page-header>
      <app-list-page-body>
        <app-artist-list [listName]="listName" (listItemClicked)="onArtistClicked($event)"></app-artist-list>
      </app-list-page-body>
    </app-list-page>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArtistListRootComponent implements OnInit {

  public listName = fromDeps.ArtistListNames.MAIN_ARTIST_LIST;

  constructor(
      private detailsRoute: fromDeps.routes.ArtistDetailsRoute
  ) { }

  ngOnInit(): void {
  }

  public onArtistClicked(artistId: string): void {
    this.detailsRoute.navigate({ artistId });
  }

}
