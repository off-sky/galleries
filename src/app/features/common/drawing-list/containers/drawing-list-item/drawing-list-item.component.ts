import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import * as fromDeps from '../../dependencies'
import {Observable} from "rxjs";

@Component({
  selector: 'app-drawing-list-item',
  template: `
    <app-list-item-card>
      <div class="card-content">
        <ng-container *ngIf="drawing$ | async; let drawing; else noGallery">
          <app-drawing-list-card [drawing]="drawing"></app-drawing-list-card>
        </ng-container>
        <ng-template #noGallery>
          <ng-container *ngIf="loading$ | async">
            <app-list-item-spinner></app-list-item-spinner>
          </ng-container>
          <ng-container *ngIf="error$ | async">
            <app-list-item-error>
              Failed to load drawing
            </app-list-item-error>
          </ng-container>
        </ng-template>
      </div>
    </app-list-item-card>
  `,
  styles: [
      `.card-content { min-height: 50px; }`
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DrawingListItemComponent implements OnInit {

  @Input() public drawingId: string;

  public drawing$: Observable<fromDeps.Drawing>;
  public loading$: Observable<boolean>;
  public error$: Observable<any>;

  constructor(
      private dataFacade: fromDeps.store.DrawingDataFacade
  ) { }

  ngOnInit(): void {
    this.dataFacade.onLoadDrawingRequested(this.drawingId);
    this.drawing$ = this.dataFacade.getDrawing$(this.drawingId);
    this.loading$ = this.dataFacade.getDrawingLoading$(this.drawingId);
    this.error$ = this.dataFacade.getDrawingError$(this.drawingId);
  }

}
