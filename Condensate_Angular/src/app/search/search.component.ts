import { Component, OnInit } from '@angular/core';
import { CompileMetadataResolver } from '@angular/compiler';
import { ApiService } from '../api.service';

export const compare = (v1, v2) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  steam_id: string;
  submit_touched: boolean;
  constructor(private api_service: ApiService) { }

  ngOnInit() {
    this.submit_touched = false;
  }

  onSearchSubmit(isValid: boolean) {
    if (isValid)
      this.api_service.getUserGames(this.steam_id).subscribe(res => console.log(res));
  }
}
