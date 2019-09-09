import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { CallbackComponent } from './callback/callback.component';
import { ProfileComponent } from './profile/profile.component';
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import { environment } from './../environments/environment';
import { DashboardComponent } from './administration/dashboard/dashboard.component';
import { NgrxRouterStoreModule } from './root-store/reducers/router';
import { HomeComponent } from './home/home.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { EventsComponent } from './administration/events/events.component';
import { StudentsComponent } from './administration/students/students.component';
import { TeachersComponent } from './administration/teachers/teachers.component';
import { SchedulesComponent } from './administration/schedules/schedules.component';
import { SessionsComponent } from './administration/sessions/sessions.component';
import { ChoicesComponent } from './administration/choices/choices.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RootStoreModule } from './root-store/root-store-module';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CallbackComponent,
    ProfileComponent,
    DashboardComponent,
    HomeComponent,
    EventsComponent,
    StudentsComponent,
    TeachersComponent,
    SchedulesComponent,
    SessionsComponent,
    ChoicesComponent
  ],
  imports: [
    NgrxRouterStoreModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    StoreDevtoolsModule.instrument({maxAge :25, logOnly: !environment.production }),
    AngularFontAwesomeModule,
    HttpClientModule ,
    InMemoryWebApiModule.forRoot(DataService),
    ReactiveFormsModule,
    RootStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
