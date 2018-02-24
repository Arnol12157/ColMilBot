import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MatCardModule, MatDatepickerModule, MatInputModule, MatNativeDateModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DatepickerPageComponent} from './datepicker-page.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    RouterModule.forChild([
      {path: '', component: DatepickerPageComponent}
    ])
  ],
  declarations: [
    DatepickerPageComponent
  ]
})
export class DatepickerPageModule {
}
