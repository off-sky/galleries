import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-tabs-layout-tab-content',
  template: `
    <ng-content></ng-content>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsLayoutTabContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
