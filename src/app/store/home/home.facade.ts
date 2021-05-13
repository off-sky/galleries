import {Store} from "@ngrx/store";
import {AppSection} from "./dependencies";
import {homeComponentInit, setAppSection} from "./home.actions";
import {Observable} from "rxjs";
import {getSection} from "./home.selectors";
import {Injectable} from "@angular/core";

@Injectable()
export class HomeFacade {
    constructor(
        private store: Store<any>
    ) {
    }

    public getSection$(): Observable<AppSection> {
        return this.store.select(getSection);
    }

    public onSetSection(section: AppSection): void {
        this.store.dispatch(setAppSection({ section }));
    }

    public onInitHomeComponent(): void {
        this.store.dispatch(homeComponentInit());
    }
}
