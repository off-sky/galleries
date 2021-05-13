import {Injectable} from "@angular/core";
import {AbstractRouteService, NavigationRequest, RouterStateUrl} from "../common-dependencies";
import {DrawingDetailsRouteData} from "./dependencies";

@Injectable({ providedIn: "root" })
export class DrawingDetailsRoute extends AbstractRouteService<DrawingDetailsRouteData> {

    protected getRequest(data: DrawingDetailsRouteData, replaceUrl: boolean): NavigationRequest {
        return {
            path: ['drawings', 'details', data.drawingId ],
            queryParams: {},
            extras: {
                replaceUrl
            }
        }
    }

    protected parseRouterState(routerState: RouterStateUrl): DrawingDetailsRouteData {
        return {
            drawingId: routerState.params.drawingId
        }
    }

    protected getStaticRelativeUrl(data: DrawingDetailsRouteData): string {
        return ['drawings', 'details', data.drawingId ].join('/');
    }

}
