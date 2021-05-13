import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {TabService} from "../tab.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-tab',
  template: `
    <div class="tab" [ngClass]="{ selected: isSelected$ | async, last: isLast }" (click)="onClick()">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
      `
      .tab {
        padding: 10px 20px;
        text-align: center;
        border: 1px solid grey;
        border-right: none;
        cursor: pointer;
      }
      
      .tab.last {
        border-right: 1px solid grey;
      }
      
      .tab.selected {
        color: #01b3b3;
        border-top: 2px solid #01b3b3;
        border-bottom: none;
      }
      `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabComponent implements OnInit {

  @Input() public id: string;

  public isSelected$: Observable<boolean>;
  public isLast: boolean;

  constructor(
      private tabService: TabService
  ) { }

  ngOnInit(): void {
    this.isSelected$ = this.tabService.getSelected$()
        .pipe(
            map(selectedId => selectedId === this.id)
        );
  }

  public onClick(): void {
    this.tabService.setSelected(this.id);
  }

}
