import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
  animations: [
    trigger('fadeIn', [
      state('in', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ opacity: 0, }),
        animate(1000, style({ opacity: 1 }))
      ])
    ])
  ]
})


export class SearchResultsComponent implements OnInit {
  steam_id: string;
  includeFree: boolean;
  includeUnknown: boolean;
  includeUnplayed: boolean;


  /**
   * This is a class that basically ties all the user information together after searching for a steam user.
   * Includes charts, infographics, and tables of the games. Will ping api for games using UserService once
   * init and when the steam_id parameter on URL changes. This Component should be a child route of the Search
   * Component.
   * @param route 
   * @param service 
   * @param router 
   */
  constructor(private route: ActivatedRoute, public service: UserService, private router: Router) { }

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
    });

    this.includeFree = true;
    this.includeUnknown = true;
    this.includeUnplayed = true;
  }

  filterChanged() {
    this.service.includeFree = this.includeFree;
    this.service.includeUnknown = this.includeUnknown;
    this.service.includeUnplayed = this.includeUnplayed;
  }

}
