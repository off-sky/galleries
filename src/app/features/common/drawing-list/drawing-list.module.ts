import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawingListComponent } from './containers/drawing-list/drawing-list.component';
import { DrawingListItemComponent } from './containers/drawing-list-item/drawing-list-item.component';
import { DrawingListCardComponent } from './components/drawing-list-card/drawing-list-card.component';
import {ComponentsModule} from "../../../shared/components/components.module";
import {DrawingPipesModule} from "../drawing-pipes/drawing-pipes.module";
import {TypographyModule} from "../../../shared/typography/typography.module";



@NgModule({
    declarations: [DrawingListComponent, DrawingListItemComponent, DrawingListCardComponent],
    exports: [
        DrawingListComponent
    ],
    imports: [
        CommonModule,
        ComponentsModule,
        DrawingPipesModule,
        TypographyModule
    ]
})
export class DrawingListModule { }
