import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  public stringSearched = false;
  constructor() { }

  ngOnInit() {
  }
  getResult() {
    this.stringSearched = true;
  }
}
