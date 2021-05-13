import * as fromLists from './gallery-list.reducer';
import * as fromData from './gallery-data.reducer';
import {combineReducers} from "@ngrx/store";

export interface GalleryFeatureState {
    lists: fromLists.AllGalleryListState;
    data: fromData.GalleryDataState;
}

export const galleryFeatureReducer = combineReducers<GalleryFeatureState>({
    lists: fromLists.galleryListReducer,
    data: fromData.galleryDataReducer
})
