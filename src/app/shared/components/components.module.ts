import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionSpinnerComponent } from './section-spinner/section-spinner.component';
import { ListItemSpinnerComponent } from './list-item-spinner/list-item-spinner.component';
import { ListItemErrorComponent } from './list-item-error/list-item-error.component';
import { ListItemCardComponent } from './list-item-card/list-item-card.component';
import { PhotoRoundComponent } from './photo-round/photo-round.component';

const exports = [
  SectionSpinnerComponent,
  ListItemSpinnerComponent,
  ListItemErrorComponent,
  ListItemCardComponent,
  PhotoRoundComponent
];

@NgModule({
  declarations: [...exports ],
  imports: [
    CommonModule
  ],
  exports: [...exports]
})
export class ComponentsModule { }
