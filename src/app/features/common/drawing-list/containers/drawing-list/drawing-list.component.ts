import {Component, OnInit, ChangeDetectionStrategy, Input, TrackByFunction, Output, EventEmitter} from '@angular/core';
import * as fromDeps from '../../dependencies';
import {Observable} from "rxjs";
import {distinctUntilChanged, map} from "rxjs/operators";

@Component({
  selector: 'app-drawing-list',
  template: `
    <ng-container *ngIf="loading$ | async; else loadedTemplated">
      <app-section-spinner></app-section-spinner>
    </ng-container>
    <ng-template #loadedTemplated>
      <ng-container *ngIf="error$ | async; else itemsTemplate">
        Failed to load list
      </ng-container>
      <ng-template #itemsTemplate>
        <ng-container *ngIf="hasItems$ | async; else emptyTemplate">
          <div *ngFor="let drawingId of drawingIds$ | async; trackBy: trackByFn" class="item-wrap" (click)="onItemClick(drawingId)">
            <app-drawing-list-item [drawingId]="drawingId"></app-drawing-list-item>
          </div>
        </ng-container>
        <ng-template #emptyTemplate>
          No drawings found
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
export class DrawingListComponent implements OnInit {

  @Input() public listName: fromDeps.DrawingListName;
  // filter by this entities
  @Input() public artistIds: string[];
  @Input() public galleryIds: string[];

  @Output() public itemClicked = new EventEmitter<string>();

  public loading$: Observable<boolean>;
  public drawingIds$: Observable<string[]>;
  public hasItems$: Observable<boolean>;
  public error$: Observable<any>;
  public trackByFn: TrackByFunction<string> = (index, item) => {
    return item;
  }

  constructor(
      private listFacade: fromDeps.store.DrawingListFacade
  ) { }

  ngOnInit(): void {
    this.listFacade.onListInitialized(this.listName);
    this.initListFilters();
    this.loading$ = this.listFacade.getListLoading$(this.listName);
    this.drawingIds$ = this.listFacade.getListItems$(this.listName);
    this.hasItems$ = this.drawingIds$
        .pipe(
            map(drawingIds => !!drawingIds.length),
            distinctUntilChanged()
        );
    this.error$ = this.listFacade.getListError$(this.listName);
  }

  public onItemClick(drawingId: string): void {
    this.itemClicked.emit(drawingId);
  }

  private initListFilters(): void {
    let resultFilters = [];
    if (this.artistIds && this.artistIds.length) {
      const artistFilters: fromDeps.DrawingListFilter[] = this.artistIds.map(artistId => {
        return {
          type: fromDeps.EntityType.ARTIST,
          id: artistId
        } as fromDeps.DrawingListFilter;
      })
      resultFilters.push(...artistFilters);
    }
    if (this.galleryIds && this.galleryIds.length) {
      const galleryFilters: fromDeps.DrawingListFilter[] = this.galleryIds.map(galleryId => {
        return {
          type: fromDeps.EntityType.GALLERY,
          id: galleryId
        } as fromDeps.DrawingListFilter;
      })
      resultFilters.push(...galleryFilters);
    }
    this.listFacade.onSetFilters(this.listName, resultFilters);
  }

}
