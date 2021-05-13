import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {galleryFeatureKey} from "./feature-key";
import {galleryFeatureReducer} from "./reducers";
import {galleryFeatureEffects} from "./effects";
import {galleryFeatureFacades} from "./facades";
import {EffectsModule} from "@ngrx/effects";
import {GalleriesApiService} from "./galleries-api.service";



@NgModule({
  declarations: [],
  providers: [
      GalleriesApiService,
      ...galleryFeatureFacades
  ],
  imports: [
    CommonModule,
      StoreModule.forFeature(galleryFeatureKey, galleryFeatureReducer),
      EffectsModule.forFeature(galleryFeatureEffects)
  ]
})
export class GalleryStoreModule { }
