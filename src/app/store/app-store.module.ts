import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";

import {RouterStoreModule} from "./router/router-store.module";
import {HomeStoreModule} from "./home/home-store.module";
import {GalleryStoreModule} from "./galleries/gallery-store.module";
import {DrawingStoreModule} from "./drawings/drawing-store.module";
import {ArtistStoreModule} from "./artists/artist-store.module";


export const featureStores = [
  RouterStoreModule,
  HomeStoreModule,
  GalleryStoreModule,
  DrawingStoreModule,
  ArtistStoreModule
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument(),
    ...featureStores
  ]
})
export class AppStoreModule { }
