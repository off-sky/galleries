import {NavigationRequest, RouterStateUrl} from "../../types";

export abstract class AbstractRouteService<D> {

    protected abstract getRequest<D>(data: D): NavigationRequest;
    protected abstract parseRouterState(routerState: RouterStateUrl): D;
}
