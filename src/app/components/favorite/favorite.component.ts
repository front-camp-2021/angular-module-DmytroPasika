import { 
  Component,
   OnDestroy, 
   OnInit 
  } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProductsService } from 'src/app/shared/products.service';
import { Product } from 'src/domain';
import { RESET_ALL_FAVORITES } from 'src/helperFn/btn.helper';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})

export class FavoriteComponent implements OnInit, OnDestroy {

  favorite: string = RESET_ALL_FAVORITES
  private destroy$ = new Subject<void>();
  public items: Product[] = []
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.fetchProducts()
    .pipe(takeUntil(this.destroy$))
    .subscribe()
    this.productsService.favoriteList
    .pipe(takeUntil(this.destroy$))
    .subscribe((data) => {
      console.log('data', data)
      this.items = data
    })
  }
  
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
