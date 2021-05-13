import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-details-page-body-top',
  template: `
    <div class="app-details-page-body-top">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsPageBodyTopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
