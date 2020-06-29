import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../models/employee';
import {EmployeeData} from '../models/employee-data';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  constructor(private http: HttpClient) {
  }

  getItems(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`/api/employee`);
  }

  updateItem(id: string, data: EmployeeData): Observable<Employee> {
    return this.http.put<Employee>(`/api/employee`, data);
  }

  createItem(data: EmployeeData): Observable<Employee> {
    return this.http.post<Employee>(`/api/employee`, data);
  }

  deleteItem(id: string): Observable<void> {
    return this.http.delete<void>(`/api/employee${id}`);
  }
}
