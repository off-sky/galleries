import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import * as fromDeps from '../../dependencies';

@Component({
  selector: 'app-artist-list-card',
  template: `
    <div class="artist-card">
      <div class="column name">
        {{ artist.firstName }} {{ artist.lastName }}
      </div>
      <div class="column born">
        {{ artist.displayBornDate }}
      </div>
    </div>
  `,
  styles: [
      `
        .artist-card {
          display: flex;
        }
        .column:not(:last-child) {
          margin-right: 12px;
        }
      `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArtistListCardComponent implements OnInit {

  @Input() public artist: fromDeps.Artist;

  constructor() {
  }

  ngOnInit(): void {
  }

}
