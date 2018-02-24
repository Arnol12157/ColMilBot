import {Component, HostBinding, OnInit, ViewContainerRef} from '@angular/core';
import {routerAnimation} from '../../utils/page.animation';
import {Overlay, OverlayConfig} from '@angular/cdk/overlay';
import {ComponentPortal} from '@angular/cdk/portal';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
  animations: [routerAnimation]
})
export class ProductsPageComponent implements OnInit {
  // Add router animation
  @HostBinding('@routerAnimation') routerAnimation = true;
  // Main product item, that wold be shown first
  mainProduct = {
    name: 'Product A',
    description: 'Lorem ipsum',
    promotion: 'Sale',
    image: 'assets/products/600600.png',
    price: 99.99,
    oldPrice: 159.99
  };
  // Secondary product items
  products = [
    {
      name: 'Product B',
      description: 'Lorem ipsum',
      promotion: 'Bestseller',
      image: 'assets/products/600600.png',
      price: 99.99
    },
    {
      name: 'Product C',
      description: 'Lorem ipsum',
      promotion: 'New',
      image: 'assets/products/600600.png',
      price: 87.25
    },
    {
      name: 'Product D',
      description: 'Lorem ipsum',
      promotion: 'New',
      image: 'assets/products/600600.png',
      price: 71.99
    },
    {
      name: 'Product F',
      description: 'Lorem ipsum',
      promotion: 'Best proce',
      image: 'assets/products/600600.png',
      price: 68.99
    }
  ];

  constructor(public overlay: Overlay, public viewContainerRef: ViewContainerRef) {
  }

  ngOnInit(): void {
    this.appendCartButton();
  }

  /**
   * Add cart button with fixed position. Because of fixed position is not working correctly inside side nav, it is
   * added vie overlay functionality.
   */
  appendCartButton() {
    const config = new OverlayConfig();

    config.positionStrategy = this.overlay.position()
      .global().right('50px').bottom('80px');

    const overlayRef = this.overlay.create(config);
    overlayRef.attach(new ComponentPortal(CartButtonComponent, this.viewContainerRef));
  }
}

@Component({
  selector: 'cart-button',
  template: `
    <td-notification-count notifications="2">
      <button mat-fab class="cart-btn" color="primary" routerLink="/main/cart">
        <mat-icon>shopping_cart</mat-icon>
      </button>
    </td-notification-count>
  `
})
export class CartButtonComponent {
}
