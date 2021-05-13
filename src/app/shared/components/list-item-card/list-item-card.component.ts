/**
 * https://codepen.io/markelrayes/pen/ZEGVBZm
 */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-list-item-card',
  template: `
    <div class="property-card">
        <p><ng-content></ng-content></p>
    </div>
  `,
  styles: [
      `

        .property-card {
          cursor: pointer;
          padding: 7px 35px;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
          flex-direction: column;
          position: relative;
          -webkit-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
          -o-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
          transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
          border-radius: 16px;
          overflow: hidden;
          -webkit-box-shadow: 15px 15px 27px #e1e1e3, -15px -15px 27px #ffffff;
          box-shadow: 15px 15px 27px #e1e1e3, -15px -15px 27px #ffffff;
        }

        .property-card:hover {
          background-color: rgba(0, 255, 255, 0.13);
        }

        /* ^-- The margin bottom is necessary for the drop shadow otherwise it gets clipped in certain cases. */

      `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
