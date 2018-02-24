import {Component, HostBinding, HostListener, OnInit} from '@angular/core';
import {routerAnimation} from '../../utils/page.animation';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss'],
  animations: [routerAnimation]
})
export class PortfolioPageComponent implements OnInit {
  // Add router animation
  @HostBinding('@routerAnimation') routerAnimation = true;
  // Subscription to client width change
  gridColumns = 3;
  // Height of grid rows
  rowHeight = 360;

  constructor() {

  }

  ngOnInit() {
    this.onResize()
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.innerWidth < 1150) {
      this.gridColumns = 1;
    } else if (window.innerWidth < 1500) {
      this.gridColumns = 2;
    } else {
      this.gridColumns = 3;
    }
  }

}
