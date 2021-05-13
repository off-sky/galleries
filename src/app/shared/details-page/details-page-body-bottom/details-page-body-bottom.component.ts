import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-details-page-body-bottom',
  template: `
    <div class="app-details-page-body-bottom">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsPageBodyBottomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
