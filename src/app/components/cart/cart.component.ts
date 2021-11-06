import { Component, OnInit } from '@angular/core';
import { Product } from 'src/domain';
import { REMOVE_FROM_CART } from 'src/helperFn/btn.helper';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart = REMOVE_FROM_CART
  public items: Product[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
