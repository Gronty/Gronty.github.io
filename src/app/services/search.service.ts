import { Injectable } from '@angular/core';
import algoliasearch, { SearchIndex } from 'algoliasearch/lite';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  results: any = [];
  currentData: Observable<any>;

  private index;
  private currentSearchQuery: string = '';
  private foodTypeFilter: string = '';
  private ratingFilter: string = '';
  private paymentFilter: string = '';

  private currentPage: number = 1;
  private dataSource = new BehaviorSubject(this.results);

  private currentLatLng = '';

  constructor(private _http: HttpClient) {
    const client = algoliasearch(environment.applicationId, environment.adminApiKey);
    this.index = client.initIndex(environment.indexName);
    this.setDataObservable();
  }

  getIndexForSearch(): SearchIndex {
    return this.index;
  }

  setFoodTypeFilter(foodType: string): void {
    this.foodTypeFilter = foodType;
    this.resetPage();
    this.search();
  }

  setRatingFilter(rating: string): void {
    this.ratingFilter = rating;
    this.resetPage();
    this.search();
  }

  setPaymentFilter(payment: string): void {
    this.paymentFilter = payment;
    this.resetPage();
    this.search();
  }

  setUserLocation(lat: number, lng: number): void {
    this.currentLatLng = `${lat},${lng}`;
    this.search();
  }

  clearUserLocation(): void {
    this.currentLatLng = '';
  }

  getNextPage(): void {
    this.search(this.currentSearchQuery, true)
  }

  async search(queryString?: string, increasePage?: boolean): Promise<void> {
    if (queryString || queryString === '') this.currentSearchQuery = queryString;
    if (increasePage) this.currentPage++;
    this.index
      .search(this.currentSearchQuery, {
        page: this.currentPage,
        facetFilters: [`food_type:${this.foodTypeFilter}`, `rounded_stars_count:${this.ratingFilter}`, `payment_options:${this.paymentFilter}`],
        responseFields: [
          'hits',
          'processingTimeMS',
          'hitsPerPage',
          'nbHits',
          'page'
        ],
        aroundLatLng: this.currentLatLng
      })
      .then(({ hits, processingTimeMS, hitsPerPage, nbHits, page }) => {
        const data = {
          hits: hits,
          hitsPerPage: hitsPerPage,
          page: page,
          ms: processingTimeMS,
          count: nbHits
        }
        console.log(data)
        this.dataSource.next(data);
      })
      .catch(err => {
        console.error(err);
      });
  }

  private setDataObservable() {
    this.currentData = this.dataSource.asObservable();
  }

  private resetPage(): void {
    this.currentPage = 1;
  }

}
