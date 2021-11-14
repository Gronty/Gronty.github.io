import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SearchService } from 'src/app/services/search.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'alg-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  searchForm = new FormGroup({
    search: new FormControl(''),
  });
  result: any;

  private _subscription: Subscription;

  constructor(private _searchService: SearchService) { }

  ngOnInit(): void {
    this.getInitialResults();

    this._subscription = this.searchForm.controls['search'].valueChanges
      .pipe(
        debounceTime(200),
        distinctUntilChanged(),
        switchMap(res => this._searchService.search(res))
      )
      .subscribe(res => {
        this.result = res;
      })
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  private getInitialResults(): void {
    this._searchService.search('');
  }

}

