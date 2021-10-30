import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";
import { tap } from 'rxjs/operators'

@Injectable({ providedIn: 'root' })
export class FilterChexbox {
    public brands: Array<[]> = []
    public categories: Array<[]> = []

    constructor(private http: HttpClient) { }

    fetchBrands(): Observable<[]> {
       return this.http.get<[]>('http://localhost:3001/brands')
            .pipe(tap((data) => {
                this.brands = data
            }))
    }
    fetchCategories(): Observable<[]> {
       return this.http.get<[]>('http://localhost:3001/categories')
            .pipe(tap((data) => {
                this.categories = data
            }))
    }
}