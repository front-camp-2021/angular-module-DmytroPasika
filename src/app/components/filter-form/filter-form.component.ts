import { Component, OnInit } from '@angular/core';
import { FilterChexbox } from '../../shared/filterCheckbox.service'
@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.scss']
})
export class FilterFormComponent implements OnInit {

  constructor(public filterChexbox: FilterChexbox) { }

  ngOnInit(): void {
    this.filterChexbox.fetchBrands().subscribe()
    this.filterChexbox.fetchCategories().subscribe()
  }
}
