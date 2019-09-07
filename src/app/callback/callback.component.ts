import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {environment} from '../../environments/environment'
@Component({
  selector: 'csa-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {

  constructor(private auth: AuthService) { }
  environment : any;
  ngOnInit() {
    this.auth.handleAuthCallback();
    this.environment= environment;
  }

}
