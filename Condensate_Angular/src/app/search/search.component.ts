import { Component, OnInit } from '@angular/core';
import { CompileMetadataResolver } from '@angular/compiler';

export const compare = (v1, v2) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  steam_id: string;
  submit_touched: boolean;
  constructor() { }

  ngOnInit() {
    this.submit_touched = false;
  }

  onSubmit(isValid) {
    if (isValid)
      this.steam_id = "whatup";
  }

}
