import { Component, OnInit } from '@angular/core';
import { AutoCompleteModule } from 'primeng';
@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  public stringSearched = false;
  public array = ['abcd', 'qqq', 'qwwwww', 'abcd', 'abedrf', 'abdefrt'];
  public results;
  constructor() { }

  ngOnInit() {
  }
  getResult() {
    this.stringSearched = true;
  }
  search(event) {
    let query = event.query;
    this.results = this.filterName(query);
  }
  filterName(query) {
    let filtered: any[] = [];
    for (let i = 0; i < this.array.length; i++) {
      let name = this.array[i];
      if (name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(name);
      }
    }
    return filtered;
  }
}
