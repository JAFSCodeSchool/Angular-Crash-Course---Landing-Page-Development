import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input('value')
  value = 0;

  totalStars = 5;

  constructor() { }

  ngOnInit(): void {
  }

}
