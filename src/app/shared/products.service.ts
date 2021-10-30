import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";
import { tap } from 'rxjs/operators'

export interface Products {
  id: string
  images: Array<[]>,
  title: string
  rating: number
  price: number
  category: string
  brand: string
}

@Injectable({ providedIn: 'root' })
export class ProductsService {
  public products: Products[] = [];
  public filteredProduct: Products[] = [];

  constructor(private http: HttpClient) { }

  filter(): void {
    this.filteredProduct = [...this.products].slice(0, 8)
  }

  fetchProducts(): Observable<Products[]> {
    return this.http.get<Products[]>('http://localhost:3001/products')
      .pipe(tap((products) => {
        this.products = products
        this.filter()
      }
      ))
  }
}