import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleriesRoutingModule } from './galleries-routing.module';
import { GalleryListRootComponent } from './containers/gallery-list-root/gallery-list-root.component';
import {ListPageModule} from "../../shared/list-page/list-page.module";
import {GalleryListModule} from "../common/gallery-list/gallery-list.module";
import { GalleryDetailsRootComponent } from './containers/gallery-details-root/gallery-details-root.component';
import { GalleryTabDrawingRootComponent } from './containers/gallery-tab-drawing-root/gallery-tab-drawing-root.component';
import { GalleryTabArtistRootComponent } from './containers/gallery-tab-artist-root/gallery-tab-artist-root.component';

import * as fromGuards from './guards';
import {DetailsPageModule} from "../../shared/details-page/details-page.module";
import { GalleryDetailsInfoComponent } from './components/gallery-details-info/gallery-details-info.component';
import {TabsLayoutModule} from "../../shared/tabs-layout/tabs-layout.module";
import {TabsModule} from "../../shared/tabs/tabs.module";
import {ComponentsModule} from "../../shared/components/components.module";
import {TypographyModule} from "../../shared/typography/typography.module";
import {ArtistListModule} from "../common/artist-list/artist-list.module";
import {DrawingListModule} from "../common/drawing-list/drawing-list.module";

@NgModule({
    declarations: [
        GalleryListRootComponent,
        GalleryDetailsRootComponent,
        GalleryTabDrawingRootComponent,
        GalleryTabArtistRootComponent,
        GalleryDetailsInfoComponent
    ],
    providers: [
        ...fromGuards.galleryGuards
    ],
    imports: [
        CommonModule,
        GalleriesRoutingModule,
        ListPageModule,
        GalleryListModule,
        DetailsPageModule,
        TabsLayoutModule,
        TabsModule,
        ComponentsModule,
        TypographyModule,
        ArtistListModule,
        DrawingListModule
    ]
})
export class GalleriesModule { }
