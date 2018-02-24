import {Component, HostBinding, OnInit} from '@angular/core';
import {routerAnimation} from '../../utils/page.animation';

@Component({
  selector: 'app-spinner-page',
  templateUrl: './spinner-page.component.html',
  styleUrls: ['./spinner-page.component.scss'],
  animations: [routerAnimation]
})
export class SpinnerPageComponent implements OnInit {
  // Add router animation
  @HostBinding('@routerAnimation') routerAnimation = true;
  // Spinner parameters
  color = 'primary';
  mode = 'indeterminate';
  value = 50;

  constructor() {
  }

  ngOnInit() {
  }

}
