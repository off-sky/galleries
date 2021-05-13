import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {homeFeatureKey} from "./feature-key";
import {homeFeatureReducer} from "./home.reducers";
import {HomeFacade} from "./home.facade";
import {EffectsModule} from "@ngrx/effects";
import {HomeEffects} from "./home.effects";



@NgModule({
  declarations: [],
  providers: [ HomeFacade ],
  imports: [
    CommonModule,
    StoreModule.forFeature(homeFeatureKey, homeFeatureReducer),
    EffectsModule.forFeature([ HomeEffects ])
  ]
})
export class HomeStoreModule { }
