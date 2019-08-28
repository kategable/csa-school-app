import { Component } from '@angular/core';
import { UserFacadeService } from './services/user-facade.service';
import { Observable } from 'rxjs';
import { User } from './models/user.model';

@Component({
  selector: 'csa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'csa-school-app';
  

}
