import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'alg-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.scss']
})
export class SearchResultItemComponent implements OnInit {

  @Input() dataItem: any;

  constructor() { }

  ngOnInit(): void {
  }

}
