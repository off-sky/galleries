import {Injectable} from "@angular/core";
import {AbstractRouteService, getNPathSegment, NavigationRequest, RouterStateUrl} from "../common-dependencies";
import {GalleryDetailsRouteData, GalleryDetailsTab,} from "./dependencies";

@Injectable({ providedIn: "root" })
export class GalleryDetailsRoute extends AbstractRouteService<GalleryDetailsRouteData> {

    protected getRequest(data: GalleryDetailsRouteData, replaceUrl: boolean): NavigationRequest {
        return {
            path: ['galleries', 'details', data.galleryId, data.tab || GalleryDetailsTab.DEFAULT ],
            queryParams: {},
            extras: {
                replaceUrl
            }
        }
    }

    protected parseRouterState(routerState: RouterStateUrl): GalleryDetailsRouteData {
        return {
            galleryId: routerState.params.galleryId,
            tab: getNPathSegment(routerState.url, 4) as GalleryDetailsTab
        }
    }

    protected getStaticRelativeUrl(data: GalleryDetailsRouteData): string {
        return ['galleries', 'details', data.galleryId, data.tab || GalleryDetailsTab.DEFAULT ].join('/');
    }

}
