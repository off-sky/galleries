import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Observable} from "rxjs";
import * as fromDeps from "../../dependencies";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-gallery-details-root',
  template: `
    <app-details-page *ngIf="gallery$ | async; let gallery; else noGallery;">
      <app-details-page-top>
        {{ gallery.name }}
      </app-details-page-top>
      <app-details-page-body-top>
        <app-gallery-details-info [gallery]="gallery"></app-gallery-details-info>
      </app-details-page-body-top>
      <app-details-page-body-bottom>
        <app-tabs-layout>
          <app-tabs-layout-tabs>
            <app-tabs [selected]="currentTab$ | async" (selectedChanged)="onTabChange($event)">
              <app-tab [id]="tabs.DRAWINGS">
                Drawings
              </app-tab>
              <app-tab [id]="tabs.ARTISTS">
                Artists
              </app-tab>
            </app-tabs>
          </app-tabs-layout-tabs>
          <app-tabs-layout-tab-content>
            <router-outlet></router-outlet>
          </app-tabs-layout-tab-content>
        </app-tabs-layout>
      </app-details-page-body-bottom>
    </app-details-page>

    <ng-template #noGallery>
      <ng-container *ngIf="loading$ | async; else noLoading">
        <app-section-spinner></app-section-spinner>
      </ng-container>
      <ng-template #noLoading>
        <ng-container *ngIf="error$ | async">
          Failed to load gallery
        </ng-container>
      </ng-template>
    </ng-template>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryDetailsRootComponent implements OnInit {
  public gallery$: Observable<fromDeps.Gallery>;
  public loading$: Observable<boolean>;
  public error$: Observable<any>;
  public currentTab$: Observable<fromDeps.GalleryDetailsTab>;

  public tabs = fromDeps.GalleryDetailsTab;
  constructor(
    private detailsFacade: fromDeps.store.GalleryDetailsFacade,
    private detailsRoute: fromDeps.routes.GalleryDetailsRoute
  ) { }

  ngOnInit(): void {
    this.gallery$ = this.detailsFacade.getOpenedGallery$();
    this.loading$ = this.detailsFacade.getOpenedGalleryLoading$();
    this.error$ = this.detailsFacade.getOpenedGalleryError$();
    this.currentTab$ = this.detailsFacade.getTab$();
  }

  public onTabChange(tab: string): void {
    this.detailsFacade.onSetTab(tab as fromDeps.GalleryDetailsTab);
    this.navigateOnTabChange(tab as fromDeps.GalleryDetailsTab);
  }

  private navigateOnTabChange(tab: fromDeps.GalleryDetailsTab): void {
    this.detailsFacade.getOpenedGalleryId$()
        .pipe(
            take(1)
        )
        .subscribe(galleryId => {
          this.detailsRoute.navigate({ galleryId, tab }, true);
        })
  }

}
