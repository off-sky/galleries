import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-tabs-layout-tabs',
  template: `
    <ng-content></ng-content>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsLayoutTabsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
