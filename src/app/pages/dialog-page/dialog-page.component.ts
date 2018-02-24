import {Component, HostBinding, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {DialogExampleComponent} from './dialog-example.component';
import {routerAnimation} from '../../utils/page.animation';

@Component({
  selector: 'app-dialog-page',
  templateUrl: './dialog-page.component.html',
  styleUrls: ['./dialog-page.component.scss'],
  animations: [routerAnimation]
})
export class DialogPageComponent implements OnInit {
  // Add router animation
  @HostBinding('@routerAnimation') routerAnimation = true;
  selectedOption: string;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogExampleComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
  }

}
