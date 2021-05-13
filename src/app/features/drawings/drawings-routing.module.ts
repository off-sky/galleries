import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DrawingListRootComponent} from "./containers/drawing-list-root/drawing-list-root.component";
import {DrawingDetailsRootComponent} from "./containers/drawing-details-root/drawing-details-root.component";
import * as fromGuards from './guards';

const routes: Routes = [
  {
    path: 'list',
    component: DrawingListRootComponent
  },
  {
    path: 'details/:drawingId',
    canActivate: [ fromGuards.DrawingDetailsCanActivateGuard ],
    component: DrawingDetailsRootComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrawingsRoutingModule { }
