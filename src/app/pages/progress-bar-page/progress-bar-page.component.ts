import {Component, HostBinding, OnInit} from '@angular/core';
import {routerAnimation} from '../../utils/page.animation';

@Component({
  selector: 'app-progress-bar-page',
  templateUrl: './progress-bar-page.component.html',
  styleUrls: ['./progress-bar-page.component.scss'],
  animations: [routerAnimation]
})
export class ProgressBarPageComponent implements OnInit {
  // Add router animation
  @HostBinding('@routerAnimation') routerAnimation = true;
  // Progress bar options
  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  bufferValue = 75;

  constructor() { }

  ngOnInit() {
  }

}
