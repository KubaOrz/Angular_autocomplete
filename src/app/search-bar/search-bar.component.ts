import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface KeyWord{
  name: string;
}

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  searchText: any;
  keyWords: KeyWord[] = [];
  link: string = "https://www.google.com/search?q=";

  constructor(
    private http: HttpClient
  ) { }

  getText(text: string) {
    this.searchText = text;
  }

  search() {
    if (this.searchText.length > 0) {
      this.link += this.searchText;
      window.open(this.link, "_blank");
    }
  }

  /*updateText() {
    this.searchText = document.getElementsByName("search");
  }*/

  ngOnInit(): void {
    this.http.get<KeyWord[]>('/assets/keywords.json').subscribe (
      data => this.keyWords = data,
      err => console.log("Nie udało się pobrać danych!", err)
    );
  }

}
