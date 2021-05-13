import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinksRoutingModule } from './links-routing.module';
import { LinksRootComponent } from './links-root/links-root.component';
import {ListPageModule} from "../../shared/list-page/list-page.module";


@NgModule({
  declarations: [LinksRootComponent],
    imports: [
        CommonModule,
        LinksRoutingModule,
        ListPageModule
    ]
})
export class LinksModule { }
