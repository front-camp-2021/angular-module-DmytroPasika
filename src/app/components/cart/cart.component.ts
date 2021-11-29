import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProductsService } from 'src/app/shared/products.service';
import { Product } from 'src/domain';
import { REMOVE_FROM_CART } from 'src/helperFn/btn.helper';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  cart = REMOVE_FROM_CART
  private destroy$ = new Subject<void>();
  public items: Product[] = []

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.cartList
    .pipe(takeUntil(this.destroy$))
    .subscribe((data) => {
      this.items = data
    })
    this.items = this.productsService.getCart()
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
