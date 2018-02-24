import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html'
})
export class DialogExampleComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogExampleComponent>) {}

  ngOnInit() {
  }

}
