import {Component, HostBinding, OnInit} from '@angular/core';
import {TooltipPosition} from '@angular/material';
import {routerAnimation} from '../../utils/page.animation';

@Component({
  selector: 'app-tooltip-page',
  templateUrl: './tooltip-page.component.html',
  styleUrls: ['./tooltip-page.component.scss'],
  animations: [routerAnimation]
})
export class TooltipPageComponent implements OnInit {
  // Add router animation
  @HostBinding('@routerAnimation') routerAnimation = true;
  position: TooltipPosition = 'below';
  message = 'Here is the tooltip';
  disabled = false;
  showDelay = 0;
  hideDelay = 1000;
  constructor() { }

  ngOnInit() {
  }

}
