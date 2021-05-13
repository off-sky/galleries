import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubtextComponent } from './subtext/subtext.component';
import { LabelDownValueComponent } from './label-down-value/label-down-value.component';

const exports = [
  SubtextComponent,
  LabelDownValueComponent
]

@NgModule({
  declarations: [...exports],
  imports: [
    CommonModule
  ],
  exports: [ ...exports]
})
export class TypographyModule { }
