import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import * as fromDeps from '../../dependencies';

@Component({
  selector: 'app-gallery-details-info',
  template: `
    <div class="gallery-details-info">
      <div class="column">
        <app-label-down-value [label]="'Location'" [value]="gallery.location"></app-label-down-value>
      </div>
      <div class="column">
        <app-label-down-value [label]="'Website'" [value]="gallery.website"></app-label-down-value>
      </div>
    </div>
  `,
  styles: [
      `
        .gallery-details-info {
          display: flex;
        }
        
        .column:not(:last-child) {
          margin-right: 20px;
        }
      `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryDetailsInfoComponent implements OnInit {

  @Input() public gallery: fromDeps.Gallery;

  constructor() { }

  ngOnInit(): void {
  }

}
