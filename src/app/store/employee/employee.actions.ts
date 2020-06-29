import {EmployeeData} from '../../models/employee-data';

export class EmployeeActionGetItems {
  public static readonly type = '[Employee] Get items';
}

export class EmployeeActionUpdateItem {
  public static readonly type = '[Employee] Update item';

  constructor(public payload: { id: string, data: EmployeeData }) {
  }
}

export class EmployeeActionCreateItem {
  public static readonly type = '[Employee] Create item';

  constructor(public payload: { data: EmployeeData }) {
  }
}

export class EmployeeActionDeleteItem {
  public static readonly type = '[Employee] Delete item';

  constructor(public payload: { id: string }) {
  }
}
