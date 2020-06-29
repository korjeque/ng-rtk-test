import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDpiComponent } from './dialog-dpi.component';

describe('DialogDpiComponent', () => {
  let component: DialogDpiComponent;
  let fixture: ComponentFixture<DialogDpiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogDpiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
