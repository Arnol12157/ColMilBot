import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {TreePageComponent} from './tree-page.component';
import {TreeDialogComponent} from './tree-dialog/tree-dialog.component';
import {TreeModule} from 'angular-tree-component';
import {MatButtonModule, MatCardModule, MatDialogModule, MatInputModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    TreeModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    RouterModule.forChild([
      {path: '', component: TreePageComponent}
    ])
  ],
  declarations: [
    TreePageComponent,
    TreeDialogComponent
  ],
  entryComponents: [
    TreeDialogComponent
  ],
  exports: [
    TreeDialogComponent
  ]
})
export class TreePageModule {
}
