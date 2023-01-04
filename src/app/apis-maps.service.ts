import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApisMapsService {

  constructor(private http: HttpClient) { }

  apiKey: string = 'VN4XrLpSU19oQGo1L9VbGQ==CZLo9VYefk2jDzeV';
  headers = new HttpHeaders({ 'X-Api-Key': this.apiKey});
  requestOptions = { headers: this.headers };

  getLocation( city: string ): Observable<Coordinates[]>{
    return this.http.get<Coordinates[]>(`https://api.api-ninjas.com/v1/geocoding?city=${city}`, this.requestOptions)
  }
}
export interface Coordinates {
  country: string,
  latitude: number,
  longitude: number,
  name: string,
  state?: string
}