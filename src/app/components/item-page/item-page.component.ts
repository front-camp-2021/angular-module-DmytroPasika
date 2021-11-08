import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProductsService } from 'src/app/shared/products.service';
import { Product } from 'src/domain';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss']
})
export class ItemPageComponent implements OnInit, OnDestroy {
  item: any
  items: Product[] = []
  id: string = ''
  private destroy$ = new Subject<void>();
  
  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  
    getItem(): void {
      const itemFromFind = this.items.find(i => i.id === this.id)
      if ( itemFromFind !== undefined) {
        this.item = itemFromFind
      } else { 
        this.router.navigate(['/not-found'])
      }
    }

  ngOnInit(): void {
    this.productService.fetchProducts()
    .pipe(takeUntil(this.destroy$))
    .subscribe((data) => {
      this.items = data
      this.id = this.route.snapshot.params['id'];
      this.getItem()
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
