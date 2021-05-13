import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
  ContentChildren, QueryList, AfterContentInit
} from '@angular/core';
import {TabService} from "../tab.service";
import {Subscription} from "rxjs";
import {skip} from "rxjs/operators";
import {TabComponent} from "../tab/tab.component";

@Component({
  selector: 'app-tabs',
  template: `
    <div class="tabs">
      <div class="filler-start"></div>
      <ng-content select="app-tab"></ng-content>
      <div class="filler"></div>
    </div>
  `,
  styles: [
      `
      .tabs {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
      }
      
      .filler {
        flex: 1;
        border-bottom: 1px solid grey;
        height: 40px;
        position: relative;
        left: -1px;
      }
      
      .filler-start {
        width: 15px;
        border-bottom: 1px solid grey;
        height: 40px;
        position: relative;
        right: -1px;
      }
      `
  ],
  providers: [
    TabService
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent implements OnInit, OnDestroy, AfterContentInit {

  @Input() public selected: string;
  @Output() public selectedChanged: EventEmitter<string> = new EventEmitter<string>();
  @ContentChildren(TabComponent) private tabs: QueryList<TabComponent>;

  private subscr = new Subscription();

  constructor(
      private tabService: TabService
  ) { }

  ngOnInit(): void {
    if (this.selected) {
      this.tabService.setSelected(this.selected)
    }
    const sub = this.tabService.getSelected$()
        .pipe(
            skip(1)
        )
        .subscribe(value => this.selectedChanged.emit(value));
    this.subscr.add(sub);
  }

  ngOnDestroy(): void {
    this.subscr.unsubscribe();
  }

  ngAfterContentInit(): void {
    this.tabs.last.isLast = true;
  }

}
