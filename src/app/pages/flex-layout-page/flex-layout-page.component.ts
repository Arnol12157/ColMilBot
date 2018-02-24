import {Component, HostBinding, OnInit} from '@angular/core';
import {routerAnimation} from '../../utils/page.animation';

@Component({
  selector: 'app-flex-layout-page',
  templateUrl: './flex-layout-page.component.html',
  styleUrls: ['./flex-layout-page.component.scss'],
  animations: [routerAnimation]
})
export class FlexLayoutPageComponent implements OnInit {
  // Add router animation
  @HostBinding('@routerAnimation') routerAnimation = true;
  public direction = 'row';
  public mainAxis = 'space-around';
  public crossAxis = 'center';

  constructor() {
  }

  ngOnInit() {
  }

  layoutAlign () {
    return `${this.mainAxis} ${this.crossAxis}`;
  }

}
