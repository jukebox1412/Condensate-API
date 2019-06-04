import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { isDevMode } from '@angular/core';
import { GamePlaytime } from './classes/GamePlaytime';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = "api/users"
  private getUserUrl = "/GetUserGamesById"

  /**
   * The service that connects the Client App to the API
   * @param http 
   */
  constructor(private http: HttpClient) {
    if (!isDevMode()) {
      this.baseUrl = "https://condensate.me/" + this.baseUrl
    }
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /**
   * Given the search query, ping the api for user games
   * @param searchQuery Should be url to steam profile or steam id
   */
  getUserGames(searchQuery: string): Observable<GamePlaytime[]> {
    return this.http.get<GamePlaytime[]>(this.baseUrl + this.getUserUrl, {
      params: {
        id: searchQuery
      }
    }).pipe(
      catchError(this.handleError<GamePlaytime[]>("getUserGames", []))
    );
  }
}

