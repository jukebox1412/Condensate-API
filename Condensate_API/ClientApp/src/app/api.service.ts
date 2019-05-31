import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { isDevMode } from '@angular/core';
import { GamePlaytime } from './classes/GamePlaytime';
import { catchError, tap } from 'rxjs/operators';
import { UserService } from './table/user.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = "api/users"
  private getUserUrl = "/GetUserGamesById"
  constructor(private http: HttpClient) {
    if (!isDevMode()) {
      this.baseUrl = "https://condensate.me/" + this.baseUrl
    }
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getUserGames(searchQuery: string): Observable<GamePlaytime[]> {
    return this.http.get<GamePlaytime[]>(this.baseUrl + this.getUserUrl, {
      params: {
        id: searchQuery
      }
    }).pipe(
      // tap(res => this.userService.sourceGamePlaytimes$.next(res)),
      catchError(this.handleError<GamePlaytime[]>("getUserGames", []))
    );
  }
}

