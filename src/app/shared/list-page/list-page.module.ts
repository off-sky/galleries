import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPageComponent } from './list-page/list-page.component';
import { ListPageHeaderComponent } from './list-page-header/list-page-header.component';
import { ListPageBodyComponent } from './list-page-body/list-page-body.component';



@NgModule({
    declarations: [ListPageComponent, ListPageHeaderComponent, ListPageBodyComponent],
    exports: [
        ListPageComponent,
        ListPageHeaderComponent,
        ListPageBodyComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ListPageModule { }
