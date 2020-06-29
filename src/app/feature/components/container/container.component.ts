import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {EmployeeActionGetItems} from '../../../store/employee/employee.actions';
import {EmployeeState} from '../../../store/employee/employee.state';
import {Observable} from 'rxjs';
import {Employee} from '../../../models/employee';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainerComponent implements OnInit {
  @Select(EmployeeState.employees$) employee$: Observable<Employee[]>;
  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(new EmployeeActionGetItems());
  }

}
