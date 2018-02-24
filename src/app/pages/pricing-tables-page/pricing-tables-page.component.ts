import {Component, HostBinding, OnInit} from '@angular/core';
import {routerAnimation} from '../../utils/page.animation';

@Component({
  selector: 'app-pricing-tables-page',
  templateUrl: './pricing-tables-page.component.html',
  styleUrls: ['./pricing-tables-page.component.scss'],
  animations: [routerAnimation]
})
export class PricingTablesPageComponent implements OnInit {
  // Add router animation
  @HostBinding('@routerAnimation') routerAnimation = true;
  // Pricing table items
  prisingItems = [
    {
      icon: 'assets/pricing-icons/06.svg',
      title: 'STARTUP',
      features: [
        'A wide palette of colors and textures',
        'Set of modules to choose from',
        'Multi language support'
      ],
      price: '$ 1000,00'
    },
    {
      icon: 'assets/pricing-icons/05.svg',
      title: 'BUSINESS',
      features: [
        'A wide palette of colors and textures',
        'Set of modules to choose from',
        'Multi language support',
        'Promotion advice',
      ],
      price: '$ 2 000,00'
    },
    {
      icon: 'assets/pricing-icons/02.svg',
      title: 'ENTERPRISE',
      features: [
        'A wide palette of colors and textures',
        'Set of modules to choose from',
        'Multi language support',
        'Promotion advice',
        'We always have a consultation line',
      ],
      price: '$ 3 000,00'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
