import {createFeatureSelector} from "@ngrx/store";
import {galleryFeatureKey} from "../feature-key";
import {GalleryFeatureState} from "../reducers";

export const getGalleriesFeature = createFeatureSelector<GalleryFeatureState>(galleryFeatureKey);
