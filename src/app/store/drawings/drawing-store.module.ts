import { NgModule } from '@angular/core';
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import { CommonModule } from '@angular/common';
import {DrawingsApiService} from "./drawings-api.service";
import {drawingFeatureFacades} from "./facades";
import {drawingFeatureKey} from "./feature-key";
import {drawingFeatureReducer} from "./reducers";
import {drawingFeatureEffects} from "./effects";



@NgModule({
  declarations: [],
  providers: [
      DrawingsApiService,
      ...drawingFeatureFacades
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(drawingFeatureKey, drawingFeatureReducer),
    EffectsModule.forFeature(drawingFeatureEffects)
  ]
})
export class DrawingStoreModule { }
