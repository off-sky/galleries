import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsPageComponent } from './details-page/details-page.component';
import { DetailsPageTopComponent } from './details-page-top/details-page-top.component';
import { DetailsPageBodyTopComponent } from './details-page-body-top/details-page-body-top.component';
import { DetailsPageBodyBottomComponent } from './details-page-body-bottom/details-page-body-bottom.component';

const exports = [
  DetailsPageComponent, DetailsPageTopComponent, DetailsPageBodyTopComponent, DetailsPageBodyBottomComponent
]

@NgModule({
  declarations: [...exports],
  imports: [
    CommonModule
  ],
  exports: [...exports]
})
export class DetailsPageModule { }
