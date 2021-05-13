import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";

@Injectable()
export class TabService {

  public selected$$: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor() { }

  public setSelected(id: string): void {
    this.selected$$.next(id);
  }

  public getSelected$(): Observable<string> {
    return this.selected$$.asObservable();
  }
}
