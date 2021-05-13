import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {GalleryListName} from "../../dependencies";
import * as fromDeps from '../../dependencies';

@Component({
  selector: 'app-gallery-list-root',
  template: `
    <app-list-page>
      <app-list-page-header>
        Galleries
      </app-list-page-header>
      <app-list-page-body>
        <app-gallery-list [listName]="galleryListName"
                          (itemClicked)="onGalleryItemClick($event)">
        </app-gallery-list>
      </app-list-page-body>
    </app-list-page>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryListRootComponent implements OnInit {

  public galleryListName = GalleryListName.MAIN_LIST;

  constructor(
      private galleryDetailsRoute: fromDeps.routes.GalleryDetailsRoute
  ) { }

  ngOnInit(): void {
  }

  public onGalleryItemClick(galleryId: string): void {
    this.galleryDetailsRoute.navigate({ galleryId });
  }

}
