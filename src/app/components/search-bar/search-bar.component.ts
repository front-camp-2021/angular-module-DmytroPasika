import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { ProductsService } from 'src/app/shared/products.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit, OnDestroy {
  private _searchSubject: Subject<string> = new Subject()
  @Output() setValue: EventEmitter<string> = new EventEmitter()
  searchValue: string = ''

  constructor(private productsService: ProductsService) {
    this._setSearchSubscription();
  }
  ngOnDestroy(): void {
    this._searchSubject.unsubscribe();
  }

  ngOnInit(): void {
  }

  private _setSearchSubscription(): void {
    this._searchSubject.pipe(
      debounceTime(500)
    ).subscribe((searchValue: string) => {
      this.productsService.setSearchFilter(searchValue)
    });
  }

  public updateSearch(): void {
    this._searchSubject.next(this.searchValue);
  }
}
