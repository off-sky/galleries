import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  TrackByFunction,
  Output,
  EventEmitter
} from '@angular/core';
import { store, GalleryListName, GalleryListFilter, EntityType } from "../../dependencies";
import {Observable} from "rxjs";

@Component({
  selector: 'app-gallery-list',
  template: `
    <ng-container *ngIf="loading$ | async; else loadedTemplated">
      <app-section-spinner></app-section-spinner>
    </ng-container>
    <ng-template #loadedTemplated>
      <ng-container *ngIf="error$ | async; else itemsTemplate">
        Failed to load list
      </ng-container>
      <ng-template #itemsTemplate>
        <ng-container *ngIf="(galleryIds$ | async)?.length; else emptyTemplate">
          <div
              *ngFor="let galleryId of galleryIds$ | async; trackBy: trackByFn;"
              class="item-wrap"
              (click)="onItemClicked(galleryId)"
          >
            <app-gallery-list-item [galleryId]="galleryId"></app-gallery-list-item>
          </div>
        </ng-container>
        <ng-template #emptyTemplate>
          No galleries found
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
export class GalleryListComponent implements OnInit {

  @Input() public listName: GalleryListName;
  @Input() public artistIds: string[];
  @Output() public itemClicked = new EventEmitter<string>();

  public loading$: Observable<boolean>;
  public galleryIds$: Observable<string[]>;
  public error$: Observable<any>;
  public trackByFn: TrackByFunction<string> = (index, item) => {
    return item;
  };

  constructor(
      private facade: store.GalleryListFacade
  ) { }

  ngOnInit(): void {
    this.facade.onListInitialized(this.listName);
    this.setListFilters();
    this.loading$ = this.facade.getListLoading$(this.listName);
    this.galleryIds$ = this.facade.getListItems$(this.listName);
    this.error$ = this.facade.getListError$(this.listName);
  }

  public onItemClicked(galleryId: string): void {
    this.itemClicked.emit(galleryId);
  }

  private setListFilters(): void {
    if (this.artistIds && this.artistIds.length) {
      const artistFilters: GalleryListFilter[] = this.artistIds.map(artistId => {
        return {
          id: artistId,
          type: EntityType.ARTIST
        } as GalleryListFilter;
      });
      this.facade.onSetFilters(this.listName, artistFilters);
    }
  }

}
