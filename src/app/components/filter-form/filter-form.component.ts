import { Component, OnDestroy, OnInit } from '@angular/core';
import { FilterChexbox } from '../../shared/filterCheckbox.service'
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { FilterTypes } from "src/helperFn/filter.helper";

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.scss']
})
export class FilterFormComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  typeBrand: string = ''
  typeCategory: string = ''
  brand: string[] = []
  category: string[] = []
  constructor(public filterChexbox: FilterChexbox) { 
  this.typeBrand = FilterTypes.Brand
  this.typeCategory = FilterTypes.Category
  }

  ngOnInit(): void {
  this.filterChexbox.fetchBrands()
  .pipe(takeUntil(this.destroy$))
  .subscribe(data => {
    this.brand = data
  })
  this.filterChexbox.fetchCategories()
  .pipe(takeUntil(this.destroy$))
  .subscribe(data => {
    this.category = data
  })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
