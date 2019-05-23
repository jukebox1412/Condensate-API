import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { isDevMode } from '@angular/core';

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

  getUserGames(searchQuery: string): Observable<any> {
    return this.http.get(this.baseUrl + this.getUserUrl, {
      params: {
        id: searchQuery
      }
    });
  }
}
