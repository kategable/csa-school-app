import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {  Store } from '@ngrx/store';
import { State } from '../store/reducers/reducer';
import * as StoreActions from '../store/actions/actions'
import { selectUserContext } from '../store';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';
@Component({
  selector: 'csa-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user$: Observable<User>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
   
   this.user$ =  this.store.select(selectUserContext);
   this.user$.subscribe(d=> console.log(d))
  
  }
  login(){
    this.store.dispatch(new StoreActions.Login())
  }
  logout(){
    this.store.dispatch(new StoreActions.Logout())

  }

}