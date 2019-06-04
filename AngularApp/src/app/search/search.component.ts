import { Component, OnInit } from '@angular/core';
import { CompileMetadataResolver } from '@angular/compiler';
import { ApiService } from '../api.service';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';

export const compare = (v1, v2) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {


  steam_id: string;
  submitted: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
    this.submitted = false;
    this.steam_id = "76561197963657845";
  }

  onSearchSubmit(isValid: boolean) {
    if (isValid) {
      this.submitted = true;
      this.router.navigate(['search', 'results', { steam_id: this.steam_id }]);
    }
  }
}
