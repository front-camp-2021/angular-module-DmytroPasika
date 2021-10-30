import {
  Component,
  Input,
  OnInit
} from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {
  id: string = ''
  images: Array<[]> = []
  title: string = ''
  rating: number = 0
  price: number = 0
  category: string = ''
  brand: string = ''

  @Input() item: any
  constructor() { }

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
