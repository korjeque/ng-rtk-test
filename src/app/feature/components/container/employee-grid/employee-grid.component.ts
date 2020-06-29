import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {Store} from '@ngxs/store';
import {Employee} from '../../../../models/employee';

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

  constructor(private store: Store) {
  }

  ngOnInit(): void {

  }

}
