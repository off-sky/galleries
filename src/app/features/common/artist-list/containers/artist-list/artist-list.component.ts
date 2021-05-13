import {Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output, TrackByFunction} from '@angular/core';
import * as fromDeps from "../../dependencies";
import {Observable} from "rxjs";

@Component({
  selector: 'app-artist-list',
  template: `
    <ng-container *ngIf="loading$ | async; else loadedTemplated">
      <app-section-spinner></app-section-spinner>
    </ng-container>
    <ng-template #loadedTemplated>
      <ng-container *ngIf="error$ | async; else itemsTemplate">
        Failed to load list
      </ng-container>
      <ng-template #itemsTemplate>
        <ng-container *ngIf="(artistIds$ | async)?.length; else emptyTemplate">
          <div *ngFor="let artistId of artistIds$ | async; trackBy: trackByFn; " class="item-wrap"
               (click)="onListItemClick(artistId)">
            <app-artist-list-item [artistId]="artistId"></app-artist-list-item>
          </div>
        </ng-container>
        <ng-template #emptyTemplate>
          No artists found
        </ng-template>
      </ng-template>
    </ng-template>
  `,
  styles: [
    `
        .item-wrap:not(:last-child) {
          margin-bottom: 20px;
        }
      `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArtistListComponent implements OnInit {
  @Input() public listName: fromDeps.ArtistListNames;
  // filter
  @Input() public galleryIds: string[];
  @Output() public listItemClicked = new EventEmitter<string>()

  public loading$: Observable<boolean>;
  public artistIds$: Observable<string[]>;
  public error$: Observable<any>;
  public trackByFn: TrackByFunction<string> = (index, item) => {
    return item;
  }
  constructor(
      private listFacade: fromDeps.store.ArtistListsFacade
  ) { }

  ngOnInit(): void {
    this.listFacade.onListInitialized(this.listName);
    this.initFilters();
    this.loading$ = this.listFacade.getListLoading$(this.listName);
    this.artistIds$ = this.listFacade.getListItems$(this.listName);
    this.error$ = this.listFacade.getListError$(this.listName);
  }

  public onListItemClick(itemId: string): void {
    this.listItemClicked.emit(itemId);
  }

  private initFilters(): void {
    let resultFilters: fromDeps.ArtistListFilter[] = [];
    if (this.galleryIds && this.galleryIds.length) {
      const byGalleryFilters = this.galleryIds.map(galleryId => {
        return {
          id: galleryId,
          type: fromDeps.EntityType.GALLERY
        } as fromDeps.ArtistListFilter;
      });
      resultFilters = [...resultFilters, ...byGalleryFilters ];
    }
    if (resultFilters.length) {
      this.listFacade.onSetFilters(this.listName, resultFilters);
    }
  }

}
