import {Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef} from '@angular/core';
import * as fromDeps from '../../dependencies';

@Component({
  selector: 'app-drawing-info-bottom',
  template: `
    <div class="info-bottom">
      <div class="drawing-image">
        <img [src]="drawing?.url" class="drawing-image" alt="Drawing image" [ngClass]="{ shown: isImageShown }">
      </div>
    </div>
  `,
  styles: [
      `
        .info-bottom {
          margin: 0 -30px;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: #ebebeb;
        }
        .drawing-image {
          object-fit: scale-down;
          height: 100%;
          width: 100%;
          visibility: hidden;
        }
        .drawing-image.shown {
         visibility: visible; 
        }
      `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DrawingInfoBottomComponent implements OnInit {

  @Input() public drawing: fromDeps.Drawing;
  @Input() public gallery: fromDeps.Gallery;

  public isImageShown = false;

  constructor(
      private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isImageShown = true;
      this.cd.detectChanges();
    }, 200)
  }

}
