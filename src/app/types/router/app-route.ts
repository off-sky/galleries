import {Observable} from "rxjs";

export interface AppRoute<D> {
    navigate: (data: D) => void;
    parse$: () => Observable<D>;
}
