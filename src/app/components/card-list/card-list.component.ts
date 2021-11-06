import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ProductsService } from 'src/app/shared/products.service';
import { Product } from 'src/domain';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})

export class CardListComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  public items: Product[] = []
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.fetchProducts()
    .pipe(takeUntil(this.destroy$))
    .subscribe()
    this.productsService.pageItems
    .pipe(takeUntil(this.destroy$))
    .subscribe((data) => {
      this.items = data
    })
  }
  
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
