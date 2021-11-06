import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProductsService } from 'src/app/shared/products.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnDestroy {
  arrCounter: number[] = []
  private destroy$ = new Subject<void>();

  constructor(public productsService: ProductsService) {

  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.productsService.pageItems
    .pipe(takeUntil(this.destroy$))
    .subscribe(() => {
      // if (this.productsService.getTotalPages() < this.productsService.getCurrentPage()) {
      //   this.productsService.setFirstPage()
      // }
      this.arrCounter = []
      this.getArrCounter()
    })
  } 

  getArrCounter(): void {
    for (let i = 0; i < this.productsService.getTotalPages(); i++) {
      this.arrCounter.push(i)
    }
  }

  getCounterPages(): number[] {
  // if (this.productsService.getCurrentPage() - 5 > 1 && this.productsService.getCurrentPage() + 4 < this.productsService.getTotalPages()) {
  //   console.log(this.arrCounter.slice(this.productsService.getCurrentPage() - 6, this.productsService.getCurrentPage() + 4))
  //   console.log(this.arrCounter)
  //     return this.arrCounter.slice(this.productsService.getCurrentPage() - 6, this.productsService.getCurrentPage() + 4);
  // }
  // if (this.productsService.getCurrentPage() - 5 <= 1) {
  //     return this.arrCounter.slice(0, 10);
  // }
  // if (this.productsService.getCurrentPage() + 4 >= this.productsService.getTotalPages()) {
  //     return this.arrCounter.slice(this.productsService.getTotalPages() - 10, this.productsService.getTotalPages())
  // }
  
    return this.arrCounter
  }

}
