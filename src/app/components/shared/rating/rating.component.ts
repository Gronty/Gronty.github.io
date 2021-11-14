import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'alg-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  @Input() starsCount: number;

  @Input() reviews: number;
  @Input() selected: boolean;

  starsEmpty: number = 0;
  private maxStars: number = 5;

  starsCountInteger: number;
  starsCountDecimal: number;


  constructor() { }

  ngOnInit(): void {
    this.starsCountInteger = Math.trunc(this.starsCount);
    this.starsCountDecimal = (this.starsCount - Math.floor(this.starsCount) >= 0.5) ? 1 : 0;
    this.starsEmpty = this.maxStars - this.starsCountInteger - this.starsCountDecimal;
  }

}
