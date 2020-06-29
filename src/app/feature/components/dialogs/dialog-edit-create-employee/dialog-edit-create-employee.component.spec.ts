import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditCreateEmployeeComponent } from './dialog-edit-create-employee.component';

describe('DialogEditCreateEmployeeComponent', () => {
  let component: DialogEditCreateEmployeeComponent;
  let fixture: ComponentFixture<DialogEditCreateEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogEditCreateEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditCreateEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
