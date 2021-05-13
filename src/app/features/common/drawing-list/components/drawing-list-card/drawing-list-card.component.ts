import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import * as fromDeps from '../../dependencies';

@Component({
  selector: 'app-drawing-list-card',
  template: `
    <div class="drawing-card">
      <div class="column photo">
        <app-photo-round [url]="drawing.url"></app-photo-round>
      </div>
      <div class="column name">
        <div>
          {{ drawing.name }}
          <div>
            <app-subtext>
              {{ drawing.material | displayMaterial }}
            </app-subtext>
          </div>
        </div>
      </div>
      <div class="column dates">
        {{ drawing.dates }}
      </div>
    </div>
  `,
  styles: [
      `
      .drawing-card {
        min-height: 50px;
        display: flex;
      }
      .column {
        display: flex;
        align-items: center;
      }
      .column:not(:last-child) {
         margin-right: 12px;
      }
      .column.name {
        min-width: 260px;
      }
      `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DrawingListCardComponent implements OnInit {

  @Input() public drawing: fromDeps.Drawing;

  constructor() { }

  ngOnInit(): void {
  }

}
