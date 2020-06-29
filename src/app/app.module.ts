import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryEmployeeService} from './services/in-memory-employee-service';
import {NgxsModule} from '@ngxs/store';
import {environment} from '../environments/environment';
import {EmployeeService} from './services/employee.service';
import {EmployeeState} from './store/employee/employee.state';
// import { EmailWithInitialsPipe } from './pipes/email-with-initials.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NoopAnimationsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryEmployeeService),
    NgxsModule.forRoot([EmployeeState], {
      developmentMode: !environment.production
    })
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
