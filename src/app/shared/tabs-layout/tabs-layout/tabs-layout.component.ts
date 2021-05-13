import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-tabs-layout',
  template: `
    <div class="tabs-layout">
      <div class="tabs-layout-tabs">
        <ng-content select="app-tabs-layout-tabs"></ng-content>
      </div>
      <div class="tabs-layout-content">
        <ng-content select="app-tabs-layout-tab-content"></ng-content>
      </div>
    </div>
  `,
  styles: [
      `
      .tabs-layout {
        margin: 0 -31px;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        flex-direction: column;
      }
      
      .tabs-layout-tabs {
        height: 40px;
      }
      
      .tabs-layout-content {
        flex: 1;
        padding: 30px;
      }
      `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
