import { Injectable } from '@angular/core';
import {  Store } from '@ngrx/store';
import { State } from '../root-store/reducers/reducer';
import * as StoreActions from '../root-store/actions/actions'
import { selectUserContext } from '../root-store';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserFacadeService {

  public  user$: Observable<User>;
  constructor(private store: Store<State>) {
    this.user$ =  this.store.select(selectUserContext);
  }
  login(){
    this.store.dispatch(new StoreActions.Login())
  }
  logout(){
    this.store.dispatch(new StoreActions.Logout())

  }

}
