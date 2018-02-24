import {Component, HostBinding, OnInit} from '@angular/core';
import {routerAnimation} from '../../utils/page.animation';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss'],
  animations: [routerAnimation]
})
export class ListPageComponent implements OnInit {
  // Add router animation
  @HostBinding('@routerAnimation') routerAnimation = true;
  // Data for lists
  items: string[] = [
    'First',
    'Second',
    'Third'
  ];
  contacts: any[] = [
    {name: 'First', headline: 'Software engineer'},
    {name: 'Second', headline: 'TPM'},
    {name: 'Third', headline: 'UX designer'}
  ];
  messages: any[] = [
    {
      from: 'First',
      subject: 'Question?',
      message: 'Answer lorem ipsum adipisicing elit'
    },
    {
      from: 'Second',
      subject: 'Question?',
      message: 'Answer lorem ipsum. Numquam, perferendis.'
    },
    {
      from: 'Third',
      subject: 'Question?',
      message: 'Answer lorem ipsum'
    }
  ];
  links: any[] = [
    {name: 'Inbox'},
    {name: 'Outbox'},
    {name: 'Spam'},
    {name: 'Trash'}

  ];

  constructor() {
  }

  ngOnInit() {
  }

}
