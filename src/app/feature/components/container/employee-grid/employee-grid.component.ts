import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {Store} from '@ngxs/store';
import {Employee} from '../../../../models/employee';
import {MatDialog} from '@angular/material/dialog';
import {DialogEditEmployeeComponent} from '../../dialogs/dialog-edit-employee/dialog-edit-employee.component';
import {EmployeeActionDeleteItem} from '../../../../store/employee/employee.actions';

@Component({
  selector: 'app-employee-grid',
  templateUrl: './employee-grid.component.html',
  styleUrls: ['./employee-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeGridComponent implements OnInit {
  @Input() readonly employees: Employee[];
  displayedColumns = [
    'guid',
    'first',
    'last',
    'age',
    'email',
    'actions'
  ];

  constructor(private store: Store,
              public dialog: MatDialog
  ) {
  }

  ngOnInit(): void {

  }

  editEmployee(employee: Employee): void {
    this.dialog.open(DialogEditEmployeeComponent, {
      height: '400px',
      width: '600px',
      data: {
        employee
      }
    });
  }

  deleteEmployee(id: string): void {
    this.store.dispatch(new EmployeeActionDeleteItem({id}));
  }

}
