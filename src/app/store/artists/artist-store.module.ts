import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {artistsFeatureKey} from "./feature-key";
import {artistsFeatureReducer} from "./reducers";
import {EffectsModule} from "@ngrx/effects";
import {artistsFeatureEffects} from "./effects";
import {ArtistsApiService} from "./artists-api.service";
import {artistsFeatureFacades} from "./facades";



@NgModule({
  declarations: [],
  providers: [
      ArtistsApiService,
      ...artistsFeatureFacades
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(artistsFeatureKey, artistsFeatureReducer),
    EffectsModule.forFeature(artistsFeatureEffects)
  ]
})
export class ArtistStoreModule { }
