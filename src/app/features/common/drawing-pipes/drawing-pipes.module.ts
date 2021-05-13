import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DisplayMaterialPipe} from './display-material.pipe';

const exports = [
  DisplayMaterialPipe
]

@NgModule({
  declarations: [ ...exports ],
  imports: [
    CommonModule
  ],
  exports: [...exports]
})
export class DrawingPipesModule { }
