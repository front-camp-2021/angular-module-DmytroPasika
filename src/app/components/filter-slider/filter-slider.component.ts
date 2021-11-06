import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { Options } from "@angular-slider/ngx-slider";
import { ProductsService } from 'src/app/shared/products.service';

@Component({
  selector: 'app-filter-slider',
  templateUrl: './filter-slider.component.html',
  styleUrls: ['./filter-slider.component.scss']
})
export class FilterSliderComponent implements OnInit {
  @Input() title: string = ''

  constructor(private productsService: ProductsService) { }

  onChange(): void {
    this.productsService.setPriceFilter({
      min: this.minValue,
      max: this.maxValue
    })
  }

  minValue: number = 53;
  maxValue: number = 85000;
  options: Options = {
    floor: 53,
    ceil: 85000
  };

  ngOnInit(): void {
  }

}
