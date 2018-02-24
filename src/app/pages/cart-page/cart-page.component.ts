import {Component, HostBinding, OnInit} from '@angular/core';
import {routerAnimation} from '../../utils/page.animation';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
  animations: [routerAnimation]
})
export class CartPageComponent implements OnInit {
  // Add router animation
  @HostBinding('@routerAnimation') routerAnimation = true;
  // Products added to the cart
  productItems = [
    {
      name: 'HEADPHONES',
      price: 29.99,
      code: 'QR199PK',
      color: 'Pink',
      quantity: 1,
      image: 'assets/products/600600.png'
    },
    {
      name: 'HEADPHONES',
      price: 29.99,
      code: 'QR199PK',
      color: 'Black',
      quantity: 1,
      image: 'assets/products/600600.png'
    }
  ];
  // Possible amount of items to
  orderQuantity = [1, 2, 3, 4, 5];
  shippingCost = 5.22;
  shippingType = 'Standard';

  constructor() {
  }

  ngOnInit() {
  }

  /**
   *
   * @returns {number} sum of item price and shipping cost
   */
  getOrderSum() {
    return this.productItems.reduce((prev, val) => prev + val.price, 0);
  }

}
