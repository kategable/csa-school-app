
import { Injectable } from '@angular/core';
import {  Store } from '@ngrx/store';
import { State } from '../store/reducers/reducer';
import * as StoreActions from '../store/actions/actions'
import { selectUserContext, getYearsForUser } from '../store';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminfacadeService {
  createYear(year: { id: number; name: string; description: string; }) {
    //this.store.createYear
  }
  public years$: Observable<any>;

  constructor(private store: Store<State>) {
    this.store.dispatch(new StoreActions.LoadYearsForUser())
    this.years$ = this.store.select(getYearsForUser);
  }
}
