import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
  selector: 'app-photo-round',
  template: `
    <div class="image-wrap">
      <img *ngIf="url" src="{{url}}" class="image" width="50" height="50">
    </div>
  `,
  styles: [
      `
        .image-wrap {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: aliceblue;
          overflow: hidden;
        }
        .image {
          object-fit: cover;
        }
      `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoRoundComponent implements OnInit {

  @Input() public url: string;

  constructor() { }

  ngOnInit(): void {
  }

}
