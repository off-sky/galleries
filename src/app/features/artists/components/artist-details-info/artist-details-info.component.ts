import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import * as fromDeps from '../../dependencies';

@Component({
  selector: 'app-artist-details-info',
  template: `
    <div class="artist-details-info">
      <div class="column">
        <app-label-down-value [label]="'Born'" [value]="artist?.displayBornDate"></app-label-down-value>
      </div>
    </div>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArtistDetailsInfoComponent implements OnInit {

  @Input() public artist: fromDeps.Artist;

  constructor() { }

  ngOnInit(): void {
  }

}
