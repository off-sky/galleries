import {AppSection} from "./app-section";
import {LoadChildrenCallback} from "@angular/router";

export interface AppFeature {
    section: AppSection;
    displayLabel: string;
    module: LoadChildrenCallback
}
