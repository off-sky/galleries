import {AppFeature} from "../../types/home/app-feature";
import {AppSection} from "../../types";

export const defaultAppFeature: AppFeature = {
    section: AppSection.ARTISTS,
    displayLabel: 'Artists',
    module: () => import('../../features/artists/artists.module').then(m => m.ArtistsModule)
}

export const getAppFeatures = (): AppFeature[] => {
    return [
        {
            section: AppSection.ARTISTS,
            displayLabel: 'Artists',
            module: () => import('../../features/artists/artists.module').then(m => m.ArtistsModule)
        },
        {
            section: AppSection.DRAWINGS,
            displayLabel: 'Drawings',
            module: () => import('../../features/drawings/drawings.module').then(m => m.DrawingsModule)
        },
        {
            section: AppSection.GALLERIES,
            displayLabel: 'Galleries',
            module: () => import('../../features/galleries/galleries.module').then(m => m.GalleriesModule)
        },
        {
            section: AppSection.LINKS,
            displayLabel: 'Links',
            module: () => import('../../features/links/links.module').then(m => m.LinksModule)
        },
    ]
}
