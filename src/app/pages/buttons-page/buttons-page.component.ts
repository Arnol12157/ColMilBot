import {Component, HostBinding, OnInit} from '@angular/core';
import {routerAnimation} from '../../utils/page.animation';

@Component({
  selector: 'app-buttons-page',
  templateUrl: './buttons-page.component.html',
  styleUrls: ['./buttons-page.component.scss'],
  animations: [routerAnimation]
})
export class ButtonsPageComponent implements OnInit {
  // Add router animation
  @HostBinding('@routerAnimation') routerAnimation = true;
  // Button toggle parameters
  isVertical = false;
  isDisabled = false;
  selected = 'First';
  options = [
    'First',
    'Second',
    'Third'
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
