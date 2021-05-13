import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GalleryListRootComponent} from "./containers/gallery-list-root/gallery-list-root.component";
import {GalleryDetailsRootComponent} from "./containers/gallery-details-root/gallery-details-root.component";
import {GalleryTabDrawingRootComponent} from "./containers/gallery-tab-drawing-root/gallery-tab-drawing-root.component";
import {GalleryTabArtistRootComponent} from "./containers/gallery-tab-artist-root/gallery-tab-artist-root.component";
import * as fromGuards from './guards';

const routes: Routes = [
  {
    path: 'list',
    component: GalleryListRootComponent
  },
  {
    path: 'details/:galleryId',
    component: GalleryDetailsRootComponent,
    canActivate: [ fromGuards.GalleryDetailsCanActivateGuard ],
    children: [
      {
        path: 'drawings',
        component: GalleryTabDrawingRootComponent
      },
      {
        path: 'artists',
        component: GalleryTabArtistRootComponent
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
export class GalleriesRoutingModule { }
