import {GalleryDetailsTab} from "../dependencies";
import {createReducer, on} from "@ngrx/store";
import {setGalleryId, setTab} from "../actions/gallery-details.actions";

export interface GalleryDetailState {
    galleryId: string;
    tab: GalleryDetailsTab;
}

export const initialGalleryDetailState: GalleryDetailState = {
    galleryId: undefined,
    tab: undefined
};

export const galleryDetailReducer = createReducer<GalleryDetailState>(
    { ...initialGalleryDetailState },
    on(
        setGalleryId,
        (state, action) => {
            const { galleryId } = action;
            return {
                ...state,
                galleryId
            };
        }
    ),
    on(
        setTab,
        (state, action) => {
            const { tab } = action;
            return {
                ...state,
                tab
            };
        }
    )
);
