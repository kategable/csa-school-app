import { Component, OnInit } from '@angular/core';
import { AdminFacadeService } from 'src/app/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'csa-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  event$: Observable<any>;

  constructor(private adminFacadeService: AdminFacadeService) { }

  ngOnInit() {
    this.event$= this.adminFacadeService.event$;
    this.event$.subscribe(data=> console.log(data))
  }

}
