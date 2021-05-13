import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistListComponent } from './containers/artist-list/artist-list.component';
import { ArtistListItemComponent } from './containers/artist-list-item/artist-list-item.component';
import { ArtistListCardComponent } from './components/artist-list-card/artist-list-card.component';
import {ComponentsModule} from "../../../shared/components/components.module";

const exports = [
    ArtistListComponent
]

@NgModule({
  declarations: [ ArtistListItemComponent, ArtistListCardComponent, ...exports],
    imports: [
        CommonModule,
        ComponentsModule
    ],
    exports: [
        ...exports
    ]
})
export class ArtistListModule { }
