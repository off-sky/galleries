import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {AppSection, HomeFacade} from "../../dependencies";
import {Observable} from "rxjs";

@Component({
  selector: 'app-home-root',
  template: `
    <div class="home-root">
      <div class="left">
        <app-side-menu [section]="section$ | async" (sectionChanged)="onSectionClick($event)"></app-side-menu>
      </div>
      <div class="right">
        <router-outlet></router-outlet>
      </div>
    </div>
   
  `,
  styles: [
      `
       .home-root {
         display: flex;
         position: fixed;
         top: 0;
         bottom: 0;
         left: 0;
         right: 0;
       }
       .left {
         width: 200px;
         height: 100%;
         position: relative;
       }
       .right {
         position: relative;
         flex: 1;
       }
      `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeRootComponent implements OnInit {

  public section$: Observable<AppSection>;

  constructor(
      private facade: HomeFacade
  ) { }

  ngOnInit(): void {
    this.facade.onInitHomeComponent();
    this.section$ = this.facade.getSection$();
  }

  public onSectionClick(section: AppSection): void {
    this.facade.onSetSection(section);
  }

}
