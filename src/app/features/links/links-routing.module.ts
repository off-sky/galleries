import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LinksRootComponent} from "./links-root/links-root.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LinksRootComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinksRoutingModule { }
