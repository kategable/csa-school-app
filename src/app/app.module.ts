import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { CallbackComponent } from './callback/callback.component';
import { ProfileComponent } from './profile/profile.component';
import { StoreModule } from '@ngrx/store';
import * as fromRoot from './store/index'
import { EffectsModule } from '@ngrx/effects';
import {Effects as RootEffects} from './store/effects/effects'
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import { environment } from './../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CallbackComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    StoreModule.forRoot(fromRoot.reducers),
    EffectsModule.forRoot([RootEffects]),
    //StoreModule.forFeature('something', fromS omehting.reducers),
    StoreDevtoolsModule.instrument({maxAge :25, logOnly: !environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
