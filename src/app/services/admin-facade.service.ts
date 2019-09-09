
import { Injectable } from '@angular/core';
import {  Store } from '@ngrx/store';
import * as StoreActions from '../root-store/actions/actions'
import { getEventsForUser, getSelectedEvent,State } from '../root-store';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminFacadeService {
  createYear(year: { id: number; name: string; description: string; }) {
    //this.store.createYear
  }
  public events$: Observable<any>;
  public event$: Observable<any>;

  constructor(private store: Store<State>) {

    this.events$ = this.store.select(getEventsForUser);
    this.event$ = this.store.select(getSelectedEvent);
  }
}
