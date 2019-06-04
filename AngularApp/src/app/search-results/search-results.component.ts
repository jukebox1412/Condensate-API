import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  steam_id: string;
  constructor(private route: ActivatedRoute, private service: UserService, private router: Router) { }

  ngOnInit() {
    // aquire games after getting steam id from url
    // steam id needs to be processed as it might be a url for the user's steam profile
    // processing is done when aquiring games.
    this.steam_id = this.route.snapshot.paramMap.get('steam_id');
    this.service.aquire_games(this.steam_id);
    this.router.events.subscribe(() => {
      if (this.steam_id != this.route.snapshot.paramMap.get('steam_id')) {
        this.steam_id = this.route.snapshot.paramMap.get('steam_id');
        this.service.aquire_games(this.steam_id);
      }
    })
  }

}
