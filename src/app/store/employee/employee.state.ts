import {State, Action, StateContext, Selector} from '@ngxs/store';
import {EmployeeActionGetItems} from './employee.actions';
import {Injectable} from '@angular/core';
import {EmployeeService} from '../../services/employee.service';
import {Employee} from '../../models/employee';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

export interface EmployeeStateModel {
  employees: Employee[];
}

@State<EmployeeStateModel>({
  name: 'employee',
  defaults: {
    employees: []
  }
})
@Injectable()
export class EmployeeState {
  constructor(private employeeService: EmployeeService) {
  }

  @Selector()
  static getState(state: EmployeeStateModel): EmployeeStateModel {
    return state;
  }

  @Selector()
  static employees$(state: EmployeeStateModel): Employee[] {
    return state.employees;
  }

  // TODO global handler
  @Action(EmployeeActionGetItems)
  public getItems(ctx: StateContext<EmployeeStateModel>): Observable<Employee[]> {
    return this.employeeService.getItems().pipe(
      tap((employees: Employee[]) => {
        ctx.patchState({employees});
      }));
  }
}
