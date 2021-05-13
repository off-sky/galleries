import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as fromDeps from '../../dependencies';

@Component({
  selector: 'app-drawing-list-root',
  template: `
    <app-list-page>
      <app-list-page-header>
        Drawings
      </app-list-page-header>
      <app-list-page-body>
        <app-drawing-list [listName]="drawingListName" (itemClicked)="onDrawingClicked($event)"></app-drawing-list>
      </app-list-page-body>
    </app-list-page>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DrawingListRootComponent implements OnInit {

  public drawingListName = fromDeps.DrawingListName.MAIN_DRAWING_LIST

  constructor(
    private detailsRoute: fromDeps.routes.DrawingDetailsRoute
  ) { }

  ngOnInit(): void {
  }

  public onDrawingClicked(drawingId: string): void {
    this.detailsRoute.navigate({ drawingId });
  }

}
