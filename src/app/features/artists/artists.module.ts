import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistsRoutingModule } from './artists-routing.module';
import { ArtistListRootComponent } from './containers/artist-list-root/artist-list-root.component';
import {ListPageModule} from "../../shared/list-page/list-page.module";
import {ArtistListModule} from "../common/artist-list/artist-list.module";
import { ArtistDetailsRootComponent } from './containers/artist-details-root/artist-details-root.component';
import { ArtistTabDrawingsRootComponent } from './containers/artist-tab-drawings-root/artist-tab-drawings-root.component';
import { ArtistTabGalleriesRootComponent } from './containers/artist-tab-galleries-root/artist-tab-galleries-root.component';
import {DetailsPageModule} from "../../shared/details-page/details-page.module";
import {featureGuards} from "./guards";
import {ComponentsModule} from "../../shared/components/components.module";
import { ArtistDetailsInfoComponent } from './components/artist-details-info/artist-details-info.component';
import {TypographyModule} from "../../shared/typography/typography.module";
import {TabsModule} from "../../shared/tabs/tabs.module";
import {TabsLayoutModule} from "../../shared/tabs-layout/tabs-layout.module";
import {DrawingListModule} from "../common/drawing-list/drawing-list.module";
import {GalleryListModule} from "../common/gallery-list/gallery-list.module";


@NgModule({
  declarations: [ArtistListRootComponent, ArtistDetailsRootComponent, ArtistTabDrawingsRootComponent, ArtistTabGalleriesRootComponent, ArtistDetailsInfoComponent],
    providers: [
        ...featureGuards
    ],
    imports: [
        CommonModule,
        ArtistsRoutingModule,
        ListPageModule,
        ArtistListModule,
        DetailsPageModule,
        ComponentsModule,
        TypographyModule,
        TabsModule,
        TabsLayoutModule,
        DrawingListModule,
        GalleryListModule
    ]
})
export class ArtistsModule { }
