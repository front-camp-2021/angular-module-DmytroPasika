import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/products.service';

@Component({
  selector: 'app-filter-checkbox',
  templateUrl: './filter-checkbox.component.html',
  styleUrls: ['./filter-checkbox.component.scss']
})
export class FilterCheckboxComponent implements OnInit {
  @Input() title: string = ''
  @Input() items: string[] = []
  @Input() type: string = ''
  d: boolean = true
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
  }

  onClick(event: any) {
    this.productsService.setCheckboxFilter(event.target.name, event.target.value, event.target.checked)
  }
}
