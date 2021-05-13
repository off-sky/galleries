import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-list-item-error',
  template: `
   <div class="error">
     <ng-content></ng-content>
   </div>
  `,
  styles: [
      `
      .error {
        color: red;
      }
      `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemErrorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
