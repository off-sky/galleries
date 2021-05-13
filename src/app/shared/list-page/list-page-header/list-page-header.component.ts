import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-list-page-header',
  template: `
    <h1>
      <ng-content></ng-content>
    </h1>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListPageHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
