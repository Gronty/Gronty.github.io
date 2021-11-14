import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { FilterComponent } from './components/filter/filter.component';
import { FilterByTypeComponent } from './components/filter/components/filter-by-type/filter-by-type.component';
import { FilterByRatingComponent } from './components/filter/components/filter-by-rating/filter-by-rating.component';
import { FilterByPaymentComponent } from './components/filter/components/filter-by-payment/filter-by-payment.component';
import { RatingComponent } from './components/shared/rating/rating.component';
import { RepeatPipe } from './utils/repeat.pipe';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { SearchResultItemComponent } from './components/search-result/components/search-result-item/search-result-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToSecondsPipe } from './utils/toseconds.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FilterComponent,
    FilterByTypeComponent,
    FilterByRatingComponent,
    FilterByPaymentComponent,
    RatingComponent,
    SearchResultComponent,
    SearchResultItemComponent,
    RepeatPipe,
    ToSecondsPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
