import {createAction, props} from "@ngrx/store";
import {GalleryListFilter, GalleryListName} from "../dependencies";

const moduleName = 'Galleries';
const submoduleName = 'List';

export const listInitialized = createAction(
    `[${moduleName}] [${submoduleName}] [GalleryListComponent]: List initialized`,
    props<{ listName: GalleryListName }>()
);

export const setFilters = createAction(
    `[${moduleName}] [${submoduleName}]: Set filters`,
    props<{ listName: GalleryListName; filters: GalleryListFilter[];}>()
);

export const loadListRequested = createAction(
    `[${moduleName}] [${submoduleName}]: Load list requested`,
    props<{ listName: GalleryListName; }>()
);

export const loadListSuccess = createAction(
    `[${moduleName}] [${submoduleName}]: Load list success`,
    props<{ listName: GalleryListName; items: string[]; }>()
);

export const loadListFailed = createAction(
    `[${moduleName}] [${submoduleName}]: Load list failed`,
    props<{ listName: GalleryListName; error: any; }>()
);

