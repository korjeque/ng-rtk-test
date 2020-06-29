import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {Store} from '@ngxs/store';
import {Employee} from '../../../../models/employee';
import {MatDialog} from '@angular/material/dialog';
import {EmployeeActionDeleteItem} from '../../../../store/employee/employee.actions';
import {DialogEditCreateEmployeeComponent} from '../../dialogs/dialog-edit-create-employee/dialog-edit-create-employee.component';

@Component({
  selector: 'app-employee-grid',
  templateUrl: './employee-grid.component.html',
  styleUrls: ['./employee-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeGridComponent implements OnInit {
  @Input() readonly employees: Employee[];
  displayedColumns = [
    'index',
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
    this.dialog.open(DialogEditCreateEmployeeComponent, {
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

  createEmployee(): void {
    this.dialog.open(DialogEditCreateEmployeeComponent, {
      height: '400px',
      width: '600px',
    });
  }

}
