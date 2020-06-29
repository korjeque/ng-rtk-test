import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { EmployeeState, EmployeeStateModel } from './employee.state';

describe('Employee store', () => {
  let store: Store;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([EmployeeState])]
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  it('should return init state', () => {
    const expected: EmployeeStateModel = {
      employees: []
    };
    const actual = store.selectSnapshot(EmployeeState.getState);
    expect(actual).toEqual(expected);
  });

});
