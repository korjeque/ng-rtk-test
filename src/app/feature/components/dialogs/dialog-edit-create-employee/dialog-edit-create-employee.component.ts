import {Component, OnInit, ChangeDetectionStrategy, Inject, OnDestroy} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subject} from 'rxjs';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Store} from '@ngxs/store';
import {Employee} from '../../../../models/employee';
import {takeUntil, tap} from 'rxjs/operators';
import {EmployeeData} from '../../../../models/employee-data';
import {EmployeeActionCreateItem, EmployeeActionUpdateItem} from '../../../../store/employee/employee.actions';

@Component({
  selector: 'app-dialog-edit-create-employee',
  templateUrl: './dialog-edit-create-employee.component.html',
  styleUrls: ['./dialog-edit-create-employee.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogEditCreateEmployeeComponent implements OnInit, OnDestroy {

  employeeForm: FormGroup;
  private ngUnsubscribe$ = new Subject();

  constructor(
    public dialogRef: MatDialogRef<DialogEditCreateEmployeeComponent>,
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
    if (this.data?.employee?.guid) {
      this.store.dispatch(
        new EmployeeActionUpdateItem(
          {id: this.data.employee.guid, data})).subscribe(() => {
        this.dialogRef.close();
      });
    }else{
      this.store.dispatch(
        new EmployeeActionCreateItem(
          {data})).subscribe(() => {
        this.dialogRef.close();
      });
    }
  }

  close(): void {
    this.dialogRef.close();
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }

}
