import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { SearchService } from './services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private _title = 'Cool places to eat!';

  constructor(private _titleService: Title, private _searchService: SearchService) { }

  ngOnInit(): void {
    this.setTitle(this._title);
    this.getCurrentPosition();
  }

  private setTitle(newTitle: string) {
    this._titleService.setTitle(newTitle);
  }

  private getCurrentPosition(): void {
    navigator.geolocation.getCurrentPosition((location) => {
      console.log(location)
      this._searchService.setUserLocation(Math.round(location.coords.latitude * 100) / 100, Math.round(location.coords.longitude * 100) / 100);
    }, () => {
      this._searchService.clearUserLocation();
    }, { timeout: 10000 })
  }

}
