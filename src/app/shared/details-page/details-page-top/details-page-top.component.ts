import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-details-page-top',
  template: `
    <div class="details-page-top">
      <div class="back-btn" (click)="onBackClicked()">
        <div class="back-icon"></div>
      </div>
      <div class="header">
        <h2>
          <ng-content></ng-content>
        </h2>
      </div>
    </div>
  `,
  styles: [
      `
        .details-page-top {
          display: flex;
        }
        
        .back-btn {
          display: flex;
          align-items: center;
          margin-right: 12px;
          cursor: pointer;
        }
        
        .back-icon {
          height: 40px;
          width: 20px;
          background: url("/assets/left-arrow.svg") center center/40px 20px no-repeat;
        }
      `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsPageTopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public onBackClicked(): void {
    window.history.go(-1);
  }

}
