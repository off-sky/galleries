import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Observable} from "rxjs";
import * as fromDeps from '../../dependencies';
import {take} from "rxjs/operators";

@Component({
  selector: 'app-artist-details-root',
  template: `
    <app-details-page *ngIf="artist$ | async; let artist; else noArtist;">
      <app-details-page-top>
        {{ artist.firstName }} {{ artist.lastName }}
      </app-details-page-top>
      <app-details-page-body-top>
        <app-artist-details-info [artist]="artist"></app-artist-details-info>
      </app-details-page-body-top>
      <app-details-page-body-bottom>
        <app-tabs-layout>
          <app-tabs-layout-tabs>
            <app-tabs [selected]="currentTab$ | async" (selectedChanged)="onTabChange($event)">
              <app-tab [id]="tabs.DRAWINGS">
                Drawings
              </app-tab>
              <app-tab [id]="tabs.GALLERIES">
                Galleries
              </app-tab>
            </app-tabs>
          </app-tabs-layout-tabs>
          <app-tabs-layout-tab-content>
            <router-outlet></router-outlet>
          </app-tabs-layout-tab-content>
        </app-tabs-layout>
      </app-details-page-body-bottom>
    </app-details-page>
    
    <ng-template #noArtist>
      <ng-container *ngIf="loading$ | async; else noLoading">
        <app-section-spinner></app-section-spinner>
      </ng-container>
      <ng-template #noLoading>
        <ng-container *ngIf="error$ | async">
          Failed to load artist
        </ng-container>
      </ng-template>
    </ng-template>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArtistDetailsRootComponent implements OnInit {

  public artist$: Observable<fromDeps.Artist>;
  public loading$: Observable<boolean>;
  public error$: Observable<any>;
  public currentTab$: Observable<fromDeps.ArtistDetailsTab>;

  public tabs = fromDeps.ArtistDetailsTab;

  constructor(
      private detailsFacade: fromDeps.store.ArtistDetailsFacade,
      private detailsRoute: fromDeps.routes.ArtistDetailsRoute
  ) { }

  ngOnInit(): void {
    this.artist$ = this.detailsFacade.getOpenedArtist$();
    this.loading$ = this.detailsFacade.getOpenedArtistLoading$();
    this.currentTab$ = this.detailsFacade.getTab$();
  }

  public onTabChange(tab: string): void {
    this.detailsFacade.onSetTab(tab as fromDeps.ArtistDetailsTab);
    this.navigateOnTabChange(tab as fromDeps.ArtistDetailsTab);
  }

  private navigateOnTabChange(tab: fromDeps.ArtistDetailsTab): void {
    this.detailsFacade.getOpenedArtistId$()
        .pipe(
            take(1)
        )
        .subscribe(artistId => {
          this.detailsRoute.navigate({ artistId, tab }, true);
        })
  }

}
