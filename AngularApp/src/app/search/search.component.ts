import { Component, OnInit } from '@angular/core';
import { CompileMetadataResolver } from '@angular/compiler';
import { ApiService } from '../api.service';
import { UserService } from '../table/user.service';
import { Router } from '@angular/router';

export const compare = (v1, v2) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  steam_id: string;
  submitted: boolean;

  constructor(private _user_service: UserService, private router: Router) { }

  ngOnInit() {
    // TODO change this back to false
    // this.submit_touched = false;
    this.submitted = false;
    this.steam_id = "76561197963657845";
    console.log(this.router.url);
  }

  onSearchSubmit(isValid: boolean) {
    if (isValid) {
      this.submitted = true;
      this.router.navigate(['/', 'table', { steam_id: this.steam_id }]);
    }
  }
}
