import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/products.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  constructor(public productsService: ProductsService) { }

  ngOnInit(): void {
  }

  setCurrentPage(index: number): void {
    if (index > 0 && index <= this.productsService.totalPages) {
      this.productsService.currentPage = index
      this.productsService.page()
    }
  }

  counter(i: number) {
    return new Array(i);
}

}
