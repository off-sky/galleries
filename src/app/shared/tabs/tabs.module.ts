import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';



@NgModule({
    declarations: [TabsComponent, TabComponent],
    exports: [
        TabsComponent,
        TabComponent
    ],
    imports: [
        CommonModule
    ]
})
export class TabsModule { }
