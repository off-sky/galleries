import {NavigationRequest, RouterStateUrl} from "../../types";
import {Injectable} from "@angular/core";
import {RouterFacade} from "./router.facade";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({ providedIn: 'root'})
export abstract class AbstractRouteService<D> {

    constructor(private routerFacade: RouterFacade) {
    }

    /**
     * Leave to implementing classes
     */
    protected abstract getRequest(data: D, replaceUrl: boolean): NavigationRequest;
    protected abstract parseRouterState(routerState: RouterStateUrl): D;
    protected abstract getStaticRelativeUrl(data: D): string;

    public getAbsoluteUrl(data: D): string {
        const relativeUrl = this.getStaticRelativeUrl(data);
        return window.origin + '/' + relativeUrl;
    }

    public getRelativeUrl(data: D): string {
        return '/' + this.getStaticRelativeUrl(data);
    }

    public navigate(data: D, replaceUrl: boolean = false): void {
        const request = this.getRequest(data, replaceUrl);
        this.routerFacade.go(request);
    }

    public parse$(): Observable<D> {
        return this.routerFacade.getRouterStateUrl()
            .pipe(
                map(routerState => this.parseRouterState(routerState))
            );
    }
}
