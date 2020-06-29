import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContainerComponent} from './components/container/container.component';
import {EmployeeGridComponent} from './components/container/employee-grid/employee-grid.component';
import {MatTableModule} from '@angular/material/table';
import {RouterModule} from '@angular/router';
import {featureRoutes} from './feature.routes';
import {EmailWithInitialsPipe} from '../pipes/email-with-initials.pipe';

@NgModule({
  declarations: [
    ContainerComponent,
    EmployeeGridComponent,
    EmailWithInitialsPipe
  ],
  imports: [
    CommonModule,
    MatTableModule,
    RouterModule.forChild(featureRoutes),
  ]
})
export class FeatureModule {
}
