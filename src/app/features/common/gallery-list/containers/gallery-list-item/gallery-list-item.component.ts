import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {Gallery, store} from "../../dependencies";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-gallery-list-item',
  template: `
    <app-list-item-card>
      <div class="content-wrap">
        <ng-container *ngIf="gallery$ | async; let gallery; else noGallery">
          <app-gallery-list-card [gallery]="gallery"></app-gallery-list-card>
        </ng-container>
        <ng-template #noGallery>
          <ng-container *ngIf="loading$ | async">
            <app-list-item-spinner></app-list-item-spinner>
          </ng-container>
          <ng-container *ngIf="error$ | async">
            <app-list-item-error></app-list-item-error>
          </ng-container>
        </ng-template>
      </div>
      
    </app-list-item-card>
  `,
  styles: [
      `.content-wrap { min-height: 30px; }`
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryListItemComponent implements OnInit {

  @Input() public galleryId: string;
  
  public gallery$: Observable<Gallery>;
  public loading$: Observable<boolean>;
  public error$: Observable<any>;

  constructor(
      private dataFacade: store.GalleryDataFacade
  ) { }

  ngOnInit(): void {
    this.dataFacade.onLoadGalleryRequested(this.galleryId);
    this.gallery$ = this.dataFacade.getGallery$(this.galleryId);
    this.loading$ = this.dataFacade.getGalleryLoading$(this.galleryId);
    this.error$ = this.dataFacade.getGalleryError$(this.galleryId);
  }

}
