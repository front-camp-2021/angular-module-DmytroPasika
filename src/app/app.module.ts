import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CardContainerComponent } from './components/card-container/card-container.component';
import { CardComponent } from './components/card/card.component';
import { MainComponent } from './components/main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { CardListComponent } from './components/card-list/card-list.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FilterComponent } from './components/filter/filter.component';
import { FilterHeaderComponent } from './components/filter-header/filter-header.component';
import { FilterFormComponent } from './components/filter-form/filter-form.component';
import { BigButtonComponent } from './components/big-button/big-button.component';
import { FilterSliderComponent } from './components/filter-slider/filter-slider.component';
import { FilterCheckboxComponent } from './components/filter-checkbox/filter-checkbox.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { CartComponent } from './components/cart/cart.component';
import { ItemPageComponent } from './components/item-page/item-page.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'card', component: CardComponent},
  {path: 'cart', component: CartComponent},
  {path: 'favorite', component: FavoriteComponent},
  {path: 'item/:id', component: ItemPageComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', component: NotFoundComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardContainerComponent,
    CardComponent,
    MainComponent,
    CardListComponent,
    SearchBarComponent,
    FilterComponent,
    FilterHeaderComponent,
    FilterFormComponent,
    BigButtonComponent,
    FilterSliderComponent,
    FilterCheckboxComponent,
    PaginationComponent,
    FavoriteComponent,
    CartComponent,
    ItemPageComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSliderModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
