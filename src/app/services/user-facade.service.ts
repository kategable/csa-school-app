import { Injectable } from '@angular/core';
import {  Store } from '@ngrx/store';
import { State } from '../store/reducers/reducer';
import * as StoreActions from '../store/actions/actions'
import { selectUserContext } from '../store';
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
