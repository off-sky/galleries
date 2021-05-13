import {createAction, props} from "@ngrx/store";
import {ArtistListFilter, ArtistListNames} from "../dependencies";

const moduleName = 'Artists';
const submoduleName = 'Lists';

export const listInitialized = createAction(
    `[${moduleName}] [${submoduleName}] [ArtistListComponent]: List initialized`,
    props<{ listName: ArtistListNames }>()
);

export const setFilters = createAction(
    `[${moduleName}] [${submoduleName}]: Set filters`,
    props<{ listName: ArtistListNames; filters: ArtistListFilter[];}>()
);

export const loadListRequested = createAction(
    `[${moduleName}] [${submoduleName}]: Load list requested`,
    props<{ listName: ArtistListNames; }>()
);

export const loadListSuccess = createAction(
    `[${moduleName}] [${submoduleName}]: Load list success`,
    props<{ listName: ArtistListNames; items: string[]; }>()
);

export const loadListFailed = createAction(
    `[${moduleName}] [${submoduleName}]: Load list failed`,
    props<{ listName: ArtistListNames; error: any; }>()
);
