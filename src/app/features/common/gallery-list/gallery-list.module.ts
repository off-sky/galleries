import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryListComponent } from './containers/gallery-list/gallery-list.component';
import { GalleryListItemComponent } from './containers/gallery-list-item/gallery-list-item.component';
import { GalleryListCardComponent } from './components/gallery-list-card/gallery-list-card.component';
import {ComponentsModule} from "../../../shared/components/components.module";

const exports = [GalleryListComponent];

@NgModule({
  declarations: [GalleryListItemComponent, GalleryListCardComponent, ...exports],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [...exports]
})
export class GalleryListModule { }
