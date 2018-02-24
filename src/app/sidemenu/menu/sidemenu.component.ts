import {Component, OnInit} from '@angular/core';
import {CloseService} from '../close.service';

@Component({
  selector: 'px-gdn-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
  providers: [CloseService]
})
export class SidemenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
