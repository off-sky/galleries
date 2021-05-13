import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsLayoutComponent } from './tabs-layout/tabs-layout.component';
import { TabsLayoutTabsComponent } from './tabs-layout-tabs/tabs-layout-tabs.component';
import { TabsLayoutTabContentComponent } from './tabs-layout-tab-content/tabs-layout-tab-content.component';

const exports = [
  TabsLayoutComponent, TabsLayoutTabsComponent, TabsLayoutTabContentComponent
]

@NgModule({
  declarations: [
      ...exports
  ],
  imports: [
    CommonModule
  ],
  exports: [
      ...exports
  ]
})
export class TabsLayoutModule { }
