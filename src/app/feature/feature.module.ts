import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { DpiGridComponent } from './components/dpi/dpi-grid/dpi-grid.component';
import { DialogDpiComponent } from './components/dpi/dialogs/dialog-dpi/dialog-dpi.component';


@NgModule({
  declarations: [DpiGridComponent, DialogDpiComponent],
  imports: [
    CommonModule
  ]
})
export class FeatureModule {
}
