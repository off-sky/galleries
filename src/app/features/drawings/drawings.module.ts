import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DrawingsRoutingModule} from './drawings-routing.module';
import {DrawingListRootComponent} from './containers/drawing-list-root/drawing-list-root.component';
import {ListPageModule} from "../../shared/list-page/list-page.module";
import {DrawingListModule} from "../common/drawing-list/drawing-list.module";
import {DrawingDetailsRootComponent} from './containers/drawing-details-root/drawing-details-root.component';
import * as fromGuards from './guards';
import {DetailsPageModule} from "../../shared/details-page/details-page.module";
import {TabsLayoutModule} from "../../shared/tabs-layout/tabs-layout.module";
import {TabsModule} from "../../shared/tabs/tabs.module";
import {ComponentsModule} from "../../shared/components/components.module";
import { DrawingInfoTopComponent } from './components/drawing-info-top/drawing-info-top.component';
import { DrawingInfoBottomComponent } from './components/drawing-info-bottom/drawing-info-bottom.component';
import {TypographyModule} from "../../shared/typography/typography.module";
import {DrawingPipesModule} from "../common/drawing-pipes/drawing-pipes.module";


@NgModule({
  declarations: [DrawingListRootComponent, DrawingDetailsRootComponent, DrawingInfoTopComponent, DrawingInfoBottomComponent],
    providers: [
        ...fromGuards.drawingFeatureGuards
    ],
    imports: [
        CommonModule,
        DrawingsRoutingModule,
        ListPageModule,
        DrawingListModule,
        DetailsPageModule,
        TabsLayoutModule,
        TabsModule,
        ComponentsModule,
        TypographyModule,
        DrawingPipesModule
    ]
})
export class DrawingsModule { }
