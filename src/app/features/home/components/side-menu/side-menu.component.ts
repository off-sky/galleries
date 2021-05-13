import {Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';
import {AppSection, getAppFeatures} from "../../dependencies";

@Component({
  selector: 'app-side-menu',
  template: `
    <div class="side-menu">
      <div class="item" *ngFor="let feature of features"
           [routerLink]="feature.section"
           [ngClass]="{ selected: feature.section === section }"
           (click)="onSectionItemClick(feature.section)"
        >
        {{ feature.displayLabel }}
      </div>
    </div>
  `,
  styles: [
      `
        .side-menu {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background: aqua;
        }
        
        .item {
          padding: 15px 20px;
          cursor: pointer;
        }
        
        .item.selected {
          text-decoration: underline;
        }
      `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideMenuComponent implements OnInit {

  @Input() public section: AppSection;
  @Output() public sectionChanged = new EventEmitter<AppSection>();

  public features = getAppFeatures();

  constructor() { }

  ngOnInit(): void {
  }

  onSectionItemClick(section: AppSection): void {
    this.sectionChanged.emit(section);
  }

}
