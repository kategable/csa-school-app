import { Component, OnInit } from '@angular/core';
import { UserFacadeService } from '../services';
import { Observable } from 'rxjs';
import { User } from '../models';

@Component({
  selector: 'csa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  user$: Observable<User>;

  constructor(private userFacade: UserFacadeService) {
    this.user$ = userFacade.user$;
    }

}
