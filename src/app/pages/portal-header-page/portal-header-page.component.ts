import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-portal-header-page',
  templateUrl: './portal-header-page.component.html',
  styleUrls: ['./portal-header-page.component.scss']
})
export class PortalHeaderPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
