import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'alg-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})

export class SearchResultComponent implements OnInit, OnDestroy {

  searchResults: any;
  currentHits: number = 0;

  private _subscription: Subscription;

  constructor(private _searchService: SearchService) { }

  ngOnInit(): void {
    this._subscription = this._searchService.currentData.subscribe(data => {
      this.searchResults = data;
    });
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  showMore(): void {
    this._searchService.getNextPage();
  }

  displayShowMoreButton(): boolean {
    return (this.searchResults.count > this.searchResults.hitsPerPage) && (this.searchResults.count - (this.searchResults.hitsPerPage * this.searchResults.page) > 0);
  }

}
