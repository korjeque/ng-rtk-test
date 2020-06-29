import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DpiGridComponent } from './dpi-grid.component';

describe('DpiGridComponent', () => {
  let component: DpiGridComponent;
  let fixture: ComponentFixture<DpiGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DpiGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DpiGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
