import {State, Action, StateContext, Selector} from '@ngxs/store';
import {EmployeeActionDeleteItem, EmployeeActionGetItems, EmployeeActionUpdateItem} from './employee.actions';
import {Injectable} from '@angular/core';
import {EmployeeService} from '../../services/employee.service';
import {Employee} from '../../models/employee';
import {EMPTY, Observable, of} from 'rxjs';
import {tap} from 'rxjs/operators';
import {patch, updateItem} from '@ngxs/store/operators';

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

  @Action(EmployeeActionGetItems)
  public getItems(ctx: StateContext<EmployeeStateModel>): Observable<Employee[]> {
    return this.employeeService.getItems()
      .pipe(
        tap((employees: Employee[]) => {
          ctx.patchState({employees});
        }));
  }

  @Action(EmployeeActionDeleteItem)
  public delete(ctx: StateContext<EmployeeStateModel>,
                {payload}: EmployeeActionDeleteItem
  ): Observable<void> {
    const stateModel = ctx.getState();
    const employees = stateModel.employees.filter(x => x.guid !== payload.id);
    ctx.patchState({employees});
    return EMPTY;

    // Работает с боевым апи
    // return this.employeeService.deleteItem(payload.id)
    //   .pipe(tap(() => {
    //     const stateModel = ctx.getState();
    //     const employees = stateModel.employees.filter(x => x.guid !== payload.id);
    //     ctx.patchState({employees});
    //   }));
  }

  @Action(EmployeeActionUpdateItem)
  public updateItem(ctx: StateContext<EmployeeStateModel>,
                    {payload}: EmployeeActionUpdateItem
  ): Observable<Employee> {
    const employee: Employee = {guid: payload.id, ...payload.data};
    ctx.setState(
      patch({
        employees: updateItem<Employee>(x => x.guid === payload.id, employee)
      })
    );
    return of(employee);
    // Работает с боевым апи
    // return this.employeeService.updateItem(payload.id, payload.data)
    //   .pipe(tap((employee: Employee) => {
    //     const stateModel = ctx.getState();
    //     ctx.setState(
    //       patch({
    //         employees: updateItem<Employee>(x => x.guid === payload.id, employee)
    //       })
    //     );
    //   }));
  }

}
