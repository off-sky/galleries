import {createAction, props} from "@ngrx/store";
import {Gallery} from "../dependencies";

const moduleName = 'Galleries';
const submoduleName = 'Data';

export const loadGalleryRequested = createAction(
    `[${moduleName}] [${submoduleName}]: Load gallery requested`,
    props<{ galleryId: string; }>()
);

export const loadGallerySuccess = createAction(
    `[${moduleName}] [${submoduleName}]: Load gallery success`,
    props<{ gallery: Gallery; }>()
);

export const loadGalleryFailed = createAction(
    `[${moduleName}] [${submoduleName}]: Load gallery failed`,
    props<{ galleryId: string; error: any; }>()
);
