import {Component, HostBinding, OnInit} from '@angular/core';
import {routerAnimation} from '../../utils/page.animation';

@Component({
  selector: 'app-grid-list-page',
  templateUrl: './grid-list-page.component.html',
  styleUrls: ['./grid-list-page.component.scss'],
  animations: [routerAnimation]
})
export class GridListPageComponent implements OnInit {
  // Add router animation
  @HostBinding('@routerAnimation') routerAnimation = true;
  // Grid lists proportions
  tiles1 = [
    {text: 'One', cols: 3, rows: 1},
    {text: 'Two', cols: 1, rows: 2},
    {text: 'Three', cols: 1, rows: 1},
    {text: 'Four', cols: 2, rows: 1},
  ];
  tiles2 = [
    {text: 'One', cols: 3, rows: 1},
    {text: 'Two', cols: 1, rows: 2},
    {text: 'Three', cols: 1, rows: 1},
    {text: 'Four', cols: 1, rows: 2},
    {text: 'Five', cols: 1, rows: 1},
    {text: 'Six', cols: 1, rows: 1},
    {text: 'Seven', cols: 2, rows: 1},
  ];
  tiles3 = [
    {text: 'One', cols: 3, rows: 1},
    {text: 'Two', cols: 1, rows: 3},
    {text: 'Three', cols: 1, rows: 1},
    {text: 'Four', cols: 2, rows: 2},
    {text: 'Five', cols: 1, rows: 1},
  ];
  tiles4 = [
    {text: 'One', cols: 3, rows: 1},
    {text: 'Two', cols: 1, rows: 3},
    {text: 'Three', cols: 3, rows: 2},
  ];
  constructor() { }

  ngOnInit() {
  }

}
