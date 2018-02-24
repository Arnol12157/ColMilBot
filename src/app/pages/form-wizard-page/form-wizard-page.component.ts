import {Component, HostBinding, OnInit} from '@angular/core';
import {routerAnimation} from '../../utils/page.animation';


@Component({
  selector: 'app-form-wizard-page',
  templateUrl: './form-wizard-page.component.html',
  styleUrls: ['./form-wizard-page.component.scss'],
  animations: [routerAnimation]
})
export class FormWizardPageComponent implements OnInit {
  // Add router animation
  @HostBinding('@routerAnimation') routerAnimation = true;
  constructor() { }

  ngOnInit() {
  }
}
