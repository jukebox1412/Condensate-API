// original code from https://ng-bootstrap.github.io/#/components/table/examples
import { Injectable, PipeTransform, Input } from '@angular/core';

import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

import { GamePlaytime } from './classes/GamePlaytime';
import { DecimalPipe } from '@angular/common';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';
import { SortDirection } from './table/sortable.directive';
import { ApiService } from './api.service';
import { ChartData, PieMaker } from './classes/ChartData';

interface SearchResult {
  gamePlaytimes: GamePlaytime[];
  total: number;
}

export interface Stats {
  total_value: number;
  total_playtime: number;
  avg_ratio: number;
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: string;
  sortDirection: SortDirection;
}

function compare(v1: number, v2: number) {
  return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
}

function sort(games: GamePlaytime[], column: string, direction: string): GamePlaytime[] {
  if (direction === '') {
    return games;
  } else {
    return [...games].sort((a, b) => {
      var res: number;
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
  private _loading$: BehaviorSubject<boolean>;
  private _search$: Subject<void>;
  private _gamePlaytimes$: BehaviorSubject<GamePlaytime[]>;
  private _total$: BehaviorSubject<number>;
  private _categories$: BehaviorSubject<ChartData[]>;
  private _stats$: BehaviorSubject<Stats>;
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
    ).subscribe((result: { gamePlaytimes: GamePlaytime[]; total: number; }) => {
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
    this._stats$ = new BehaviorSubject<Stats>({ avg_ratio: 0, total_playtime: 0, total_value: 0 });

    this._categories$ = new BehaviorSubject<ChartData[]>([]);
    this._gpts = [];
  }

  get categories$() { return this._categories$.asObservable(); }
  get gamePlaytimes$() { return this._gamePlaytimes$.asObservable(); }
  get stats$() { return this._stats$.asObservable(); }
  get total$() { return this._total$.asObservable(); }
  get loading$() { return this._loading$.asObservable(); }
  get page() { return this._state.page; }
  get pageSize() { return this._state.pageSize; }
  get searchTerm() { return this._state.searchTerm; }

  set page(page: number) { this._set({ page }); }
  set pageSize(pageSize: number) { this._set({ pageSize }); }
  set searchTerm(searchTerm: string) { this._set({ searchTerm }); }
  set sortColumn(sortColumn: string) { this._set({ sortColumn }); }
  set sortDirection(sortDirection: SortDirection) { this._set({ sortDirection }); }
  private calc_stats(gamePlaytimes: GamePlaytime[]): Stats {
    let total_value: number = 0;
    let total_playtime: number = 0;
    let avg_ratio: number = 0;
    for (let gpt of gamePlaytimes) {
      total_value += gpt.game.price;
      total_playtime += gpt.playtime;
    }

    let ret: Stats = {
      avg_ratio: total_playtime / total_value,
      total_playtime: total_playtime,
      total_value: total_value
    };

    return ret;
  }
  /**
   * Call this function to get the games from API and categorize them
   * @param steam_id 
   */
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

      this._categories$.next(this.categorize_games(this._gpts));
      this._stats$.next(this.calc_stats(this._gpts));
      this._search$.next();
      this._loading$.next(false);
    });
  }

  private between(num: number, min = -Infinity, max = Infinity): boolean {
    return num > min && num <= max;
  }

  private categorize_games(gamePlaytimes: GamePlaytime[]): ChartData[] {
    let ret: ChartData[] = [];

    let time_data: Array<Array<string | number>> = [
      ["0 Hours", gamePlaytimes.filter(gpt => gpt.playtime == 0).length],
      ["0-2 Hours", gamePlaytimes.filter(gpt => this.between(gpt.playtime, 0, 2)).length],
      ["2+ Hours", gamePlaytimes.filter(gpt => this.between(gpt.playtime, 2)).length]];
    ret.push(PieMaker("By Time Played", time_data));

    let price_data: Array<Array<string | number>> = [
      ["Free", gamePlaytimes.filter(gpt => gpt.game.price == 0).length],
      ["0.01-10$", gamePlaytimes.filter(gpt => this.between(gpt.game.price, 0, 10)).length],
      ["10-40$", gamePlaytimes.filter(gpt => this.between(gpt.game.price, 10, 40)).length],
      ["40-60+$", gamePlaytimes.filter(gpt => this.between(gpt.game.price, 40)).length]];
    ret.push(PieMaker("By Price", price_data));

    let ratio_data: Array<Array<string | number>> = [
      ["0 hours / $", gamePlaytimes.filter(gpt => gpt.playtime == 0).length],
      ["0-1 hours / $", gamePlaytimes.filter(gpt => this.between(gpt.playtime / gpt.game.price, 0, 1)).length],
      ["1+ hours / $", gamePlaytimes.filter(gpt => this.between(gpt.playtime / gpt.game.price, 1)).length]];
    ret.push(PieMaker("By Hours to Dollar", ratio_data));


    return ret;
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