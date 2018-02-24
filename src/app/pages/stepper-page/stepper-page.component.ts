import {Component, HostBinding, NgZone, OnDestroy, OnInit} from '@angular/core';
import {StepState, TdMediaService} from '@covalent/core';
import {Subscription} from 'rxjs/Subscription';
import {routerAnimation} from '../../utils/page.animation';

@Component({
  selector: 'app-stepper-page',
  templateUrl: './stepper-page.component.html',
  styleUrls: ['./stepper-page.component.scss'],
  animations: [routerAnimation]
})
export class StepperPageComponent implements OnInit, OnDestroy {
  // Add router animation
  @HostBinding('@routerAnimation') routerAnimation = true;
  // Stepper parameters
  activeDeactiveStep1Msg = 'No select/deselect detected yet';
  stateStep2: StepState = StepState.Required;
  stateStep3: StepState = StepState.Complete;
  disabled = false;
  isScreenGtSm = false;
  querySubscription: Subscription;

  constructor(private _mediaService: TdMediaService, private ngZone: NgZone) {
  }

  ngOnInit() {
    this.watchScreen();
  }
  ngOnDestroy(): void {
    this.querySubscription.unsubscribe();
  }

  /**
   * Change stepper layout if screen width changes
   */
  watchScreen(): void {
    this.ngZone.run(() => {
      this.isScreenGtSm = this._mediaService.query('gt-sm');
    });
    this.querySubscription = this._mediaService.registerQuery('gt-sm').subscribe((matches: boolean) => {
      this.ngZone.run(() => {
        this.isScreenGtSm = matches;
      });
    });
  }

  toggleRequiredStep2(): void {
    this.stateStep2 = (this.stateStep2 === StepState.Required ? StepState.None : StepState.Required);
  }

  toggleCompleteStep3(): void {
    this.stateStep3 = (this.stateStep3 === StepState.Complete ? StepState.None : StepState.Complete);
  }

  activeStep1Event(): void {
    this.activeDeactiveStep1Msg = 'Active event emitted.';
  }

  deactiveStep1Event(): void {
    this.activeDeactiveStep1Msg = 'Deactive event emitted.';
  }

}
