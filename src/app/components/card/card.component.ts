import {
  Component,
  Input,
  OnDestroy,
  OnInit
} from '@angular/core';
import { ProductsService } from 'src/app/shared/products.service';
import { Product } from 'src/domain';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit, OnDestroy {
  id: string = ''
  images: Array<[]> = []
  title: string = ''
  rating: number = 0
  price: number = 0
  category: string = ''
  brand: string = ''

  @Input() item: any
  constructor(private productsService: ProductsService) {  }
  ngOnDestroy(): void {

  }

  setFavorite(): void {
    if(!this.productsService.isFavorite(this.id)) {
      this.productsService.setFavoriteList(this.id)
    } else {
      this.productsService.unSetFavoriteList(this.id)
    }
  }

  setCart(): void {
    if(!this.productsService.isInCart(this.id)) {
      this.productsService.setCartList(this.id)
    } else {
      this.productsService.unSetCartList(this.id)
    }
  }

  isFavorite(id: string): boolean {
    return this.productsService.isFavorite(id)
  }

  isInCart(id: string): boolean {
    return this.productsService.isInCart(id)
  }

  ngOnInit(): void {
    this.id = this.item['id']
    this.images = this.item['images']
    this.title = this.item['title']
    this.rating = this.item['rating']
    this.price = this.item['price']
    this.category = this.item['category']
    this.brand = this.item['brand']
  }
}

