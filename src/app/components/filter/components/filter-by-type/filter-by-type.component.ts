import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { foodTypeResponse } from './filter-by-type.model';



@Component({
  selector: 'alg-filter-by-type',
  templateUrl: './filter-by-type.component.html',
  styleUrls: ['./filter-by-type.component.scss']
})
export class FilterByTypeComponent implements OnInit {

  types: any[];
  private _selectedIndex: number | any = null;

  constructor(private _searchService: SearchService) { }

  ngOnInit(): void {
    this.getFoodTypes();
  }

  getFoodTypes() {
    this._searchService.getIndexForSearch().searchForFacetValues('food_type', '').then(({ facetHits }) => {
      this.types = facetHits;
    });
  }

  setFilter(item: foodTypeResponse, index: number): void {
    this._selectedIndex = index;
    this._searchService.setFoodTypeFilter(item.value);
  }

  isSelected(index: number): boolean {
    return this._selectedIndex === index;
  }

  isFilterEnabled(): boolean {
    return this._selectedIndex !== null;
  }

  resetFilter(): void {
    this._selectedIndex = null;
    this._searchService.setFoodTypeFilter('');
  }

}
