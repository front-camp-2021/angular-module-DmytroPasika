import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
