import {Component, OnInit, ChangeDetectionStrategy, Inject, OnDestroy} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Employee} from '../../../../models/employee';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {takeUntil, tap} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {EmployeeData} from '../../../../models/employee-data';
import {Store} from '@ngxs/store';
import {EmployeeActionUpdateItem} from '../../../../store/employee/employee.actions';

@Component({
  selector: 'app-dialog-edit-employee',
  templateUrl: './dialog-edit-employee.component.html',
  styleUrls: ['./dialog-edit-employee.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogEditEmployeeComponent implements OnInit, OnDestroy {
  employeeForm: FormGroup;
  private ngUnsubscribe$ = new Subject();

  constructor(
    public dialogRef: MatDialogRef<DialogEditEmployeeComponent>,
    private store: Store,
    @Inject(MAT_DIALOG_DATA) public data: { employee: Employee }) {
  }

  ngOnInit(): void {
    this.employeeForm = new FormGroup(
      {
        name: new FormGroup({
          first: new FormControl(this.data?.employee?.name?.first, Validators.required),
          last: new FormControl(this.data?.employee?.name?.last, Validators.required),
        }),
        email: new FormControl(this.data?.employee?.email, [
          Validators.required,
          Validators.email]
        ),
        age: new FormControl(this.data?.employee?.age, [
          Validators.required,
          Validators.min(1),
          Validators.pattern('^(0|[1-9][0-9]*)$')])
      }
    );

    this.employeeForm.valueChanges.pipe(
      takeUntil(this.ngUnsubscribe$),
      tap(() => {
        this.employeeForm.markAllAsTouched();
      }));
  }

  save(): void {
    const data: EmployeeData = this.employeeForm.value;
    this.store.dispatch(
      new EmployeeActionUpdateItem(
        {id: this.data.employee.guid, data})).subscribe(() => {
      this.dialogRef.close();
    });
  }

  close(): void {
    this.dialogRef.close();
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }

}
