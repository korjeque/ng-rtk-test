import {EmployeeDetails} from './employee-details';

export interface Employee {
  guid: string;
  age: number;
  name: EmployeeDetails;
  email: string;
}
