import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-portal-footer-page',
  templateUrl: './portal-footer-page.component.html',
  styleUrls: ['./portal-footer-page.component.scss']
})
export class PortalFooterPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
