import {InMemoryDbService} from 'angular-in-memory-web-api';
import employee from '../../assets/json/mates.json';
import {Injectable} from '@angular/core';
@Injectable()
export class InMemoryEmployeeService implements InMemoryDbService {
  createDb(): any {
    return {
      employee
    };
  }
}
