import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-details-page',
  template: `
    <div class="details-page">
      <div class="details-page-top">
        <ng-content select="app-details-page-top"></ng-content>
      </div>
      <div class="details-page-body">
        <div class="details-page-body-top">
          <ng-content select="app-details-page-body-top"></ng-content>
        </div>
        <div class="details-page-body-bottom">
          <ng-content select="app-details-page-body-bottom"></ng-content>
        </div>
      </div>
    </div>
  `,
  styles: [
      `
        .details-page {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          display: flex;
          flex-direction: column;
          padding: 0 30px 0 30px;
        }
        
        .details-page-body {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        
        .details-page-body-top {
          flex: 0;
          position: relative;
          margin-bottom: 30px;
        }
        
        .details-page-body-bottom {
          flex: 1;
          position: relative;
        }
      `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
