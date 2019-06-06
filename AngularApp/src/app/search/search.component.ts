import { Component, OnInit } from '@angular/core';
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

  constructor(private router: Router, private route: ActivatedRoute) { }

  
  ngOnInit() {
    this.submitted = false;
    this.steam_id = "";
    if (this.route.firstChild)
      this.route.firstChild.paramMap.subscribe(params => {
        this.steam_id = params.get("steam_id")
      })
  }


  onSearchSubmit(isValid: boolean) {
    if (isValid) {
      this.submitted = true;
      this.router.navigate(['search', 'results', { steam_id: this.steam_id }]);
    }
  }
}
