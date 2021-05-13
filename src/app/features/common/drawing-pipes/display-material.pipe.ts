import { Pipe, PipeTransform } from '@angular/core';
import {Materials, utils} from "./dependencies";

@Pipe({
  name: 'displayMaterial'
})
export class DisplayMaterialPipe implements PipeTransform {

  transform(value: Materials): string {
    return utils.getDisplayDrawingMaterial(value);
  }

}
