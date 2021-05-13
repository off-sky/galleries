import * as fromLists from './gallery-list.reducer';
import * as fromData from './gallery-data.reducer';
import * as fromDetails from './gallery-details.reducer';
import {combineReducers} from "@ngrx/store";

export interface GalleryFeatureState {
    lists: fromLists.AllGalleryListState;
    data: fromData.GalleryDataState;
    details: fromDetails.GalleryDetailState;
}

export const galleryFeatureReducer = combineReducers<GalleryFeatureState>({
    lists: fromLists.galleryListReducer,
    data: fromData.galleryDataReducer,
    details: fromDetails.galleryDetailReducer
})
