import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-list-page-body',
  template: `
    <ng-content></ng-content>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListPageBodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
