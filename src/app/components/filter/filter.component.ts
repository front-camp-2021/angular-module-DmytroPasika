import { Component, OnInit } from '@angular/core';
import { RESET_ALL_FILTERS } from 'src/helperFn/btn.helper';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  title: string = RESET_ALL_FILTERS
  constructor() { }

  ngOnInit(): void {
  }

}
