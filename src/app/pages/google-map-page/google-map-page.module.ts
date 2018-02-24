import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MatCardModule} from '@angular/material';
import {GoogleMapPageComponent} from './google-map-page.component';
import {AgmCoreModule} from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    // Put your google maps api key here
    AgmCoreModule.forRoot({
      apiKey: 'your_google_maps_api_key'
    }),
    RouterModule.forChild([
      {path: '', component: GoogleMapPageComponent}
    ])
  ],
  declarations: [
    GoogleMapPageComponent
  ]
})
export class GoogleMapPageModule {
}
