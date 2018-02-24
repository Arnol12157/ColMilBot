import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-tree-dialog',
  templateUrl: './tree-dialog.component.html'
})
export class TreeDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TreeDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
  }

}
