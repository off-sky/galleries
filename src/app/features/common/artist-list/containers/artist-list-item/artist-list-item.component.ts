import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {Observable} from "rxjs";
import * as fromDeps from '../../dependencies';
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-artist-list-item',
  template: `
    <app-list-item-card>
      <div class="card-content">
        <ng-container *ngIf="artist$ | async; let artist; else noArtist">
          <div style="width: 100%;">
            <app-artist-list-card [artist]="artist"></app-artist-list-card>
          </div>
        </ng-container>
        <ng-template #noArtist>
          <ng-container *ngIf="loading$ | async; else noLoading;">
            <app-list-item-spinner></app-list-item-spinner>
          </ng-container>
          <ng-template #noLoading>
            <ng-container *ngIf="error$ | async">
              <app-list-item-error>
                Failed to load artist
              </app-list-item-error>
            </ng-container>
          </ng-template>
        </ng-template>
      </div>
    </app-list-item-card>
  `,
  styles: [
    `.card-content { min-height: 50px; display: flex; align-items: center; justify-content: center; }`
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArtistListItemComponent implements OnInit {

  @Input() public artistId: string;

  public artist$: Observable<fromDeps.Artist>;
  public loading$: Observable<boolean>;
  public error$: Observable<any>;

  constructor(
      private dataFacade: fromDeps.store.ArtistDataFacade
  ) { }

  ngOnInit(): void {
    this.dataFacade.onLoaddArtistRequested(this.artistId);
    this.artist$ = this.dataFacade.getArtist$(this.artistId);
    this.loading$ = this.dataFacade.getArtistLoading$(this.artistId);
    this.error$ = this.dataFacade.getArtistError$(this.artistId);
  }

}
