import {Component, HostBinding, OnInit} from '@angular/core';
import {routerAnimation} from '../../utils/page.animation';

@Component({
  selector: 'app-drag-and-drop-page',
  templateUrl: './drag-and-drop-page.component.html',
  styleUrls: ['./drag-and-drop-page.component.scss'],
  animations: [routerAnimation]
})
export class DragAndDropPageComponent implements OnInit {
  // Add router animation
  @HostBinding('@routerAnimation') routerAnimation = true;
  links = [
    {name: 'Inbox'},
    {name: 'Outbox'},
    {name: 'Spam'},
    {name: 'Trash'}
  ];
  otherLinks = [
    {name: 'New'},
    {name: 'Archive'},
    {name: 'Favourite'},
    {name: 'Important'}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
