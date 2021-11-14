import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'alg-filter-by-payment',
  templateUrl: './filter-by-payment.component.html',
  styleUrls: ['./filter-by-payment.component.scss']
})
export class FilterByPaymentComponent implements OnInit {

  availableCards: any[];

  private _selectedIndex: number | any = null;

  constructor(private _searchService: SearchService) { }

  ngOnInit(): void {
    this.initialiseCards();
  }

  initialiseCards(): void {
    this.availableCards = [
      {
        name: "American Express",
        icon: "fa-cc-amex",
        value: "AMEX"
      },
      {
        name: "Visa",
        icon: "fa-cc-visa",
        value: "Visa"
      },
      {
        name: "MasterCard",
        icon: "fa-cc-mastercard",
        value: "MasterCard"
      },
      {
        name: "Discovery",
        icon: "fa-cc-amex",
        value: "Discover"
      },
      {
        name: "Diners Club",
        icon: "fa-cc-diners-club",
        value: "Discover"
      },
      {
        name: "Carte Blanche",
        icon: "fa-credit-card-alt",
        value: "Discover"
      },

    ]
  }

  setFilter(card: any, index: number): void {
    this._selectedIndex = index;
    this._searchService.setPaymentFilter(card.value);
  }

  isSelected(index: number): boolean {
    return this._selectedIndex === index;
  }

  isFilterEnabled(): boolean {
    return this._selectedIndex !== null;
  }

  resetFilter(): void {
    this._selectedIndex = null;
    this._searchService.setPaymentFilter('');
  }

}
