import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContainerComponent} from './components/container/container.component';
import {EmployeeGridComponent} from './components/container/employee-grid/employee-grid.component';
import {MatTableModule} from '@angular/material/table';
import {RouterModule} from '@angular/router';
import {featureRoutes} from './feature.routes';
import {EmailWithInitialsPipe} from '../pipes/email-with-initials.pipe';
import {MatButtonModule} from '@angular/material/button';
import {FlexModule} from '@angular/flex-layout';
import { DialogEditEmployeeComponent } from './components/dialogs/dialog-edit-employee/dialog-edit-employee.component';
import {MatDialogModule} from '@angular/material/dialog';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    ContainerComponent,
    EmployeeGridComponent,
    EmailWithInitialsPipe,
    DialogEditEmployeeComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    RouterModule.forChild(featureRoutes),
    MatButtonModule,
    FlexModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class FeatureModule {
}
