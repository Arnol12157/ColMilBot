import {Component, HostBinding, OnInit} from '@angular/core';
import {routerAnimation} from '../../utils/page.animation';

@Component({
  selector: 'app-chips-page',
  templateUrl: './chips-page.component.html',
  styleUrls: ['./chips-page.component.scss'],
  animations: [routerAnimation]
})
export class ChipsPageComponent implements OnInit {
  // Add router animation
  @HostBinding('@routerAnimation') routerAnimation = true;
  constructor() { }

  ngOnInit() {
  }

}
