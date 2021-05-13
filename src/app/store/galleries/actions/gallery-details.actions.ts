import {createAction, props} from "@ngrx/store";
import {GalleryDetailsTab} from "../dependencies";

const moduleName = 'Gallery';
const submoduleName = 'Details';

export const setGalleryId = createAction(
    `[${moduleName}] [${submoduleName}]: Set gallery id`,
    props<{ galleryId: string; }>()
);

export const setTab = createAction(
    `[${moduleName}] [${submoduleName}]: Set tab`,
    props<{ tab: GalleryDetailsTab }>()
);
