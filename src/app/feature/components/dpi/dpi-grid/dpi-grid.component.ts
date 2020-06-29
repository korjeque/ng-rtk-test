import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dpi-grid',
  templateUrl: './dpi-grid.component.html',
  styleUrls: ['./dpi-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DpiGridComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
