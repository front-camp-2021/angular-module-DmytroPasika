import {
  Component,
  Input,
  OnDestroy,
  OnInit
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProductsService } from 'src/app/shared/products.service';
import { Product } from 'src/domain';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  public items: Product[] = []

  id: string = ''
  images: Array<[]> = []
  title: string = ''
  rating: number = 0
  price: number = 0
  category: string = ''
  brand: string = ''

  @Input() item: any
  constructor(private productsService: ProductsService) { }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  setFavorite(): void {
    this.productsService.setFavoriteList(this.id, this.items)
  }

  ngOnInit(): void {
    this.id = this.item['id']
    this.images = this.item['images']
    this.title = this.item['title']
    this.rating = this.item['rating']
    this.price = this.item['price']
    this.category = this.item['category']
    this.brand = this.item['brand']

    this.productsService.favoriteList
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        console.log(data)
        this.items = data
      })
  }
}

