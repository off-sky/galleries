import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArtistListRootComponent} from "./containers/artist-list-root/artist-list-root.component";
import {ArtistDetailsRootComponent} from "./containers/artist-details-root/artist-details-root.component";
import {ArtistTabDrawingsRootComponent} from "./containers/artist-tab-drawings-root/artist-tab-drawings-root.component";
import {ArtistTabGalleriesRootComponent} from "./containers/artist-tab-galleries-root/artist-tab-galleries-root.component";
import * as fromGuards from './guards';

const routes: Routes = [
  {
    path: 'list',
    component: ArtistListRootComponent
  },
  {
    path: 'details/:artistId',
    component: ArtistDetailsRootComponent,
    canActivate: [
        fromGuards.ArtistDetailsCanActivateGuard
    ],
    children: [
      {
        path: 'drawings',
        component: ArtistTabDrawingsRootComponent
      },
      {
        path: 'galleries',
        component: ArtistTabGalleriesRootComponent
      }
    ]
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
export class ArtistsRoutingModule { }
