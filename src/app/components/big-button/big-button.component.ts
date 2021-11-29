import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/products.service';
import { GO_HOME } from 'src/helperFn/btn.helper';

@Component({
  selector: 'app-big-button',
  templateUrl: './big-button.component.html',
  styleUrls: ['./big-button.component.scss']
})
export class BigButtonComponent implements OnInit {
  @Input() title: string = ''
  home: string = GO_HOME
  constructor(private productService: ProductsService) { 
  }
  
  reset(): void {
    this.productService.reset(this.title)
  }

  ngOnInit(): void {
  }

}
