import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/products.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  isLoanding = true
  constructor(public productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.fetchProducts().subscribe(() => {
      this.isLoanding = false
    })
  }

}
