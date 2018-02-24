import {Component, HostBinding, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {routerAnimation} from '../../utils/page.animation';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-form-elements-page',
  templateUrl: './form-elements-page.component.html',
  styleUrls: ['./form-elements-page.component.scss'],
  animations: [routerAnimation]
})
export class FormElementsPageComponent implements OnInit {
  // Add router animation
  @HostBinding('@routerAnimation') routerAnimation = true;
  radioGroupValue = 'first';
  radioGroupValue2 = 'before';
  selectValue: string;
  stateCtrl: FormControl;
  filteredStates: any;
  // Slider parameters
  _sliderTickInterval = 1;
  sliderAutoTicks = false;
  sliderDisabled = false;
  sliderInvert = false;
  sliderMax = 100;
  sliderMin = 0;
  sliderShowTicks = false;
  sliderStep = 1;
  sliderThumbLabel = false;
  sliderValue = 0;
  sliderVertical = false;
  // Toggle options
  toggleColor = 'accent';
  toggleDisabled = false;
  // Autocomplete options
  states = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida',
    'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
    'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
    'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina',
    'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
    'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
  auto: any;

  constructor() {
    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterStates(name));
  }

  ngOnInit() {
  }

  filterStates(val: string) {
    return val ? this.states.filter((s) => new RegExp(val, 'gi').test(s)) : this.states;
  }

  get sliderTickInterval(): number | 'auto' {
    return this.sliderShowTicks ? (this.sliderAutoTicks ? 'auto' : this._sliderTickInterval) : null;
  }

  set sliderTickInterval(v) {
    this._sliderTickInterval = Number(v);
  }
}
