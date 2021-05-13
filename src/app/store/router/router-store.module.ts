import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {routerReducer, StoreRouterConnectingModule} from "@ngrx/router-store";
import {CustomSerializer} from './custom-route-serializer';
import {StoreModule} from "@ngrx/store";
import {routerFeatureKey} from "./feature-key";
import {EffectsModule} from "@ngrx/effects";
import {RouterEffects} from "./router.effects";
import {RouterFacade} from "./router.facade";


@NgModule({
  declarations: [],
  providers: [
    RouterFacade,
  ],
  imports: [
    CommonModule,
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer,
    }),
    StoreModule.forFeature(routerFeatureKey, routerReducer),
    EffectsModule.forFeature([RouterEffects])
  ]
})
export class RouterStoreModule { }
