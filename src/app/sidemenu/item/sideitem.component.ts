import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import {Location} from '@angular/common';
import {CloseService} from '../close.service';
import {Subscription} from 'rxjs/Subscription';
import {AfterContentInit, Component, ContentChildren, Input, OnDestroy, OnInit, QueryList} from '@angular/core';

@Component({
  selector: 'px-gdn-sideitem',
  templateUrl: './sideitem.component.html',
  styleUrls: ['./sideitem.component.scss'],
  animations: [
    trigger('closeState', [
      state('close', style({
        height: '0'
      })),
      state('open', style({
        height: '*'
      })),
      transition('close => open', animate('250ms ease-in')),
      transition('open => close', animate('250ms ease-out'))
    ])]
})
export class SideitemComponent implements OnInit, OnDestroy, AfterContentInit {

  private closeServiceSubscription: Subscription;
  @Input() title: string;
  @Input() closeState = 'close';
  @Input() routerLinkUrl: string;
  menuLevel: number = -1;

  @ContentChildren(SideitemComponent, {descendants: true}) contentChildren: QueryList<SideitemComponent>;

  constructor(private closeServiceService: CloseService, public location: Location) {
    this.closeServiceSubscription = closeServiceService.closeInformer$.subscribe(next => {
      if (next === this.menuLevel) {
        this.closeState = 'close';
      }
    });
  }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    this.contentChildren.forEach((item) => {
      item.incrementMenuLEvel();
    });
  }

  ngOnDestroy(): void {
    this.closeServiceSubscription.unsubscribe();
  }

  toggleState(hasChildren: boolean) {
    if (hasChildren) {
      if (this.closeState === 'close') {
        this.closeServiceService.inform(this.menuLevel);
      }
      this.closeState = this.closeState === 'close' ? 'open' : 'close';
    }
  }

  incrementMenuLEvel() {
    this.menuLevel++;
  }

}
