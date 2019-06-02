// original code from https://ng-bootstrap.github.io/#/components/table/examples
import { Injectable, PipeTransform, Input } from '@angular/core';

import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

import { GamePlaytime } from '../classes/GamePlaytime';
import { DecimalPipe } from '@angular/common';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';
import { SortDirection } from './sortable.directive';
import { ApiService } from '../api.service';
import { pipe } from '@angular/core/src/render3';


interface SearchResult {
  gamePlaytimes: GamePlaytime[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: string;
  sortDirection: SortDirection;
}

function compare(v1, v2) {
  return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
}

function sort(games: GamePlaytime[], column: string, direction: string): GamePlaytime[] {
  if (direction === '') {
    return games;
  } else {
    return [...games].sort((a, b) => {
      var res;
      if (column == "playtime")
        res = compare(a[column], b[column]);
      else if (column == "ratio") {
        if (a.game.price == b.game.price)
          res = compare(a.playtime, b.playtime);
        else
          res = compare(a.playtime / a.game.price, b.playtime / b.game.price);
      }
      else
        res = compare(a.game[column], b.game[column]);

      return direction === 'asc' ? res : -res;
    });
  }
}

function matches(gp: GamePlaytime, term: string, pipe: PipeTransform) {
  let playtime_str: string = gp.playtime.toString();
  let price_str: string = gp.game.price.toString();

  let comma_less_term = term.replace(/,/g, '');
  let lowerCased = term.toLowerCase();

  return gp.game.name.toLowerCase().includes(lowerCased)
    || playtime_str.includes(comma_less_term)
    || price_str.includes(comma_less_term)
    || pipe.transform(gp.game.appid).includes(comma_less_term)
    || gp.ratio.toLowerCase().includes(lowerCased);
}

@Injectable({ providedIn: 'root' })


export class UserService {
  private _loading$;
  private _search$;
  private _gamePlaytimes$;
  private _total$;
  private _gpts: GamePlaytime[];

  private _state: State = {
    page: 1,
    pageSize: 6,
    searchTerm: '',
    sortColumn: '',
    sortDirection: ''
  };

  constructor(private pipe: DecimalPipe, private _api_service: ApiService) {
    this.init();

    this._search$.pipe(
      tap(() => this._loading$.next(true)),
      switchMap(() => this._search()),
      tap(() => this._loading$.next(false))
    ).subscribe(result => {
      this._gamePlaytimes$.next(result.gamePlaytimes);
      this._total$.next(result.total);
    });

    this._search$.next();
  }

  init() {
    this._loading$ = new BehaviorSubject<boolean>(true);
    this._search$ = new Subject<void>();
    this._gamePlaytimes$ = new BehaviorSubject<GamePlaytime[]>([]);
    this._total$ = new BehaviorSubject<number>(0);
    this._gpts = [];
  }


  get gamePlaytimes$() { return this._gamePlaytimes$; }
  get total$() { return this._total$; }
  get loading$() { return this._loading$.asObservable(); }
  get page() { return this._state.page; }
  get pageSize() { return this._state.pageSize; }
  get searchTerm() { return this._state.searchTerm; }

  set page(page: number) { this._set({ page }); }
  set pageSize(pageSize: number) { this._set({ pageSize }); }
  set searchTerm(searchTerm: string) { this._set({ searchTerm }); }
  set sortColumn(sortColumn: string) { this._set({ sortColumn }); }
  set sortDirection(sortDirection: SortDirection) { this._set({ sortDirection }); }

  aquire_games(steam_id: string) {
    // tap(() => this._loading$.next(true)),
    this._loading$.next(true);
    this._api_service.getUserGames(steam_id).subscribe(res => {
      this._gpts = res.map(gp => {
        if (gp.game.price == 0)
          gp.ratio = 'free';
        else
          gp.ratio = this.pipe.transform((gp.playtime / gp.game.price), "1.0-2");
        return gp;
      });
      this._search$.next();
      this._loading$.next(false);
    });
  }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  private _search(): Observable<SearchResult> {
    const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;
    // 1. sort
    let games = sort(this._gpts, sortColumn, sortDirection);

    // 2. filter
    games = games.filter(game => matches(game, searchTerm, this.pipe));
    const total = games.length;

    // 3. paginate
    games = games.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return of({ gamePlaytimes: games, total: total });
  }
}