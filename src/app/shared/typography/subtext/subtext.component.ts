import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-subtext',
  template: `
    <span class="subtext">
      <ng-content></ng-content>
    </span>
  `,
  styles: [
      `
      .subtext {
        color: #929292;
      }
      `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubtextComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
