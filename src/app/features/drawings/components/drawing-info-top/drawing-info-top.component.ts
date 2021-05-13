import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import * as fromDeps from '../../dependencies';

@Component({
  selector: 'app-drawing-info-top',
  template: `
    <div class="info-top-wrap">
      <div class="column">
        <app-label-down-value [label]="'Material'" [value]="drawing?.material | displayMaterial"></app-label-down-value>
      </div>
      <div class="column">
        <app-label-down-value [label]="'Dates'" [value]="drawing?.dates"></app-label-down-value>
      </div>
      <div class="column">
        <div class="label">Author</div>
        <a *ngIf="artist" [routerLink]="artistDetailsUrl">{{artist?.firstName + ' ' + artist?.lastName}}</a>
      </div>
      <div class="column">
        <div class="label">Displayed in</div>
        <a *ngIf="gallery" [routerLink]="galleryDetailsUrl">{{gallery?.name}}</a>
      </div>
    </div>
  `,
  styles: [
      `
      .info-top-wrap {
        display: flex;
        min-height: 60px;
      }
      .column {
        width: 20%;
      }
      .column:not(:last-child) {
        margin-right: 20px;
      }
      
      .label {
        color: #929292;
      }
      `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DrawingInfoTopComponent implements OnInit {
  @Input() public drawing: fromDeps.Drawing;
  @Input() public artist: fromDeps.Artist;
  @Input() public artistDetailsUrl: string;
  @Input() public gallery: fromDeps.Gallery;
  @Input() public galleryDetailsUrl: string;

  constructor() { }

  ngOnInit(): void {
  }

}
