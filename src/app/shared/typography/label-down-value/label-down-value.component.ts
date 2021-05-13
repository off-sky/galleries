import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
  selector: 'app-label-down-value',
  template: `
    <div class="label-down-value">
      <div class="label">{{label}}</div>
      <div>{{value || '--'}}</div>
    </div>
  `,
  styles: [
      `
        .label {
          color: #929292;
        }
      `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LabelDownValueComponent implements OnInit {

  @Input() public label: string = 'Label';
  @Input() public value: string | number;

  constructor() { }

  ngOnInit(): void {
  }

}
