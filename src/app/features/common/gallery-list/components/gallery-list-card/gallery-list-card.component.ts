import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {Gallery} from "../../../../../types";

@Component({
  selector: 'app-gallery-list-card',
  template: `
    <div class="app-gallery-list-card">
      <div class="column name">
        {{ gallery.name }}
      </div>
      <div class="column location">
        {{ gallery.location}}
      </div>
      <div class="column website">
        {{ gallery.website }}
      </div>
    </div>
  `,
  styles: [
      `
      .app-gallery-list-card {
        display: flex;
      }
      .column:not(:last-child) {
        margin-right: 12px;
      }
      .column.name {
        width: 30%;
        min-width: 150px;
      }
      .column.location {
        width: 30%;
        min-width: 150px;
      }
      .column.website {
        width: 10%;
        min-width: 100px;
      }
      `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryListCardComponent implements OnInit {

  @Input() public gallery: Gallery;

  constructor() { }

  ngOnInit(): void {
  }

}
