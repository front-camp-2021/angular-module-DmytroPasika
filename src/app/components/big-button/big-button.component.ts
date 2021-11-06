import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/products.service';

@Component({
  selector: 'app-big-button',
  templateUrl: './big-button.component.html',
  styleUrls: ['./big-button.component.scss']
})
export class BigButtonComponent implements OnInit {
  @Input() title: string = ''

  constructor(private productService: ProductsService) { 
  }
  
  reset(): void {
    this.productService.reset(this.title)
  }

  ngOnInit(): void {
  }

}
