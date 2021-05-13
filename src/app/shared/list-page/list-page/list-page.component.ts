import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-list-page',
  template: `
    <div class="list-page">
      <div class="list-page-header">
        <ng-content select="app-list-page-header"></ng-content>
      </div>
      <div class="list-page-body">
        <ng-content select="app-list-page-body"></ng-content>
      </div>
    </div>
  `,
  styles: [
      `
      .list-page {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 0 30px 45px 30px;
        display: flex;
        flex-direction: column;
      }
      
      
      .list-page-body {
        flex: 1;
      }
      `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
