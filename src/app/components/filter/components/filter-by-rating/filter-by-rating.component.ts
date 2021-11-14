import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'alg-filter-by-rating',
  templateUrl: './filter-by-rating.component.html',
  styleUrls: ['./filter-by-rating.component.scss']
})
export class FilterByRatingComponent implements OnInit {

  numberOfFilters:number = 6;
  private _selectedIndex: number | any = null;

  constructor(private _searchService: SearchService) { }

  ngOnInit(): void {
  }  

  setFilter(stars: number):void {
    this._selectedIndex = stars;
    this._searchService.setRatingFilter(stars.toString());
  }

  isSelected(index: number): boolean {
    return this._selectedIndex === index;
  }

  isFilterEnabled(): boolean {
    return this._selectedIndex !== null;
  }

  resetFilter(): void {
    this._selectedIndex = null;
    this._searchService.setRatingFilter('');
  }

}
