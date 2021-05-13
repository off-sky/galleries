import {AbstractRouteService, getNPathSegment, NavigationRequest, RouterStateUrl} from "../common-dependencies";
import {ArtistDetailsRouteData, ArtistDetailsTab } from "./dependencies";
import {Injectable} from "@angular/core";

@Injectable({ providedIn: "root" })
export class ArtistDetailsRoute extends AbstractRouteService<ArtistDetailsRouteData> {

    protected getRequest(data: ArtistDetailsRouteData, replaceUrl: boolean): NavigationRequest {
        return {
            path: ['artists', 'details', data.artistId, data.tab || ArtistDetailsTab.DEFAULT ],
            queryParams: {},
            extras: {
                replaceUrl
            }
        }
    }

    protected parseRouterState(routerState: RouterStateUrl): ArtistDetailsRouteData {
        return {
            artistId: routerState.params.artistId,
            tab: getNPathSegment(routerState.url, 4) as ArtistDetailsTab
        }
    }

    protected getStaticRelativeUrl(data: ArtistDetailsRouteData): string {
        return ['artists', 'details', data.artistId, data.tab || ArtistDetailsTab.DEFAULT ].join('/');
    }

}
