import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminFacadeService,UserFacadeService } from 'src/app/services';

@Component({
  selector: 'csa-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  //schools$: any;
  events$: Observable<any>;

  constructor(private adminFacadeService: AdminFacadeService, private userFacade: UserFacadeService) { }

  ngOnInit() {
 
    this.events$ = this.adminFacadeService.events$; 
  }
  add() {
    //this.adminFacadeService.createYear({ id: 11, name: "123123", description: "somesds" }) ;
  }
}
