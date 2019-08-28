import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminfacadeService } from 'src/app/services/admin-facade.service';

@Component({
  selector: 'csa-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  //schools$: any;
  years$: Observable<any>;

  constructor(private adminFacadeService: AdminfacadeService) { }

  ngOnInit() {
    // this.schools$ = this.schoolService.getSchools();
    this.years$ = this.adminFacadeService.years$;
    this.years$.subscribe(s=>console.log(s))
  }
  add() {
    //this.adminFacadeService.createYear({ id: 11, name: "123123", description: "somesds" }) ;
  }
}
