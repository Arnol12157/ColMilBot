import {Component, HostBinding, OnInit} from '@angular/core';
import {routerAnimation} from '../../utils/page.animation';

@Component({
  selector: 'app-google-map-page',
  templateUrl: './google-map-page.component.html',
  styleUrls: ['./google-map-page.component.scss'],
  animations: [routerAnimation]
})
export class GoogleMapPageComponent implements OnInit {
  // Add router animation
  @HostBinding('@routerAnimation') routerAnimation = true;
  // Map pointer coordinates
  lat = 40.730610;
  lng = -73.935242;

  constructor() {
  }

  ngOnInit() {
  }

}
