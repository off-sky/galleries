import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeRootComponent} from "./containers/home-root/home-root.component";
import {getAppFeatures} from "./dependencies";
import {defaultAppFeature} from "../../utils";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    component: HomeRootComponent,
    children: [
        ...getAppFeatures().map(feature => {
          return {
            path: feature.section,
            loadChildren: feature.module
          }
        }),
      {
        path: '',
        pathMatch: 'full',
        redirectTo: defaultAppFeature.section
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
