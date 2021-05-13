import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthRootComponent} from "./auth-root/auth-root.component";

const routes: Routes = [
  {
    path: '',
    component: AuthRootComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
