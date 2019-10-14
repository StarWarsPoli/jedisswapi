import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  private urlBase = 'https://swapi.co/api/';

  constructor(private http: HttpClient) {}

  // All films
  getAllFilms(): Observable<any> {
    const url = `${this.urlBase}films`;
    return this.http.get<any>(url).pipe(take(1));
  }

  // Fils By Id
  getFilmsById(id): Observable<any> {
    const url = `${this.urlBase}films/${id}`;
    return this.http.get<any>(url).pipe(take(1));
  }

  getPeople(): Observable<any> {
    const url = `${this.urlBase}people`;
    return this.http.get<any>(url).pipe(take(1));
  }

  getPlanets(): Observable<any> {
    const url = `${this.urlBase}planets`;
    return this.http.get<any>(url).pipe(take(1));
  }

  getSpecies(): Observable<any> {
    const url = `${this.urlBase}species`;
    return this.http.get<any>(url).pipe(take(1));
  }

  getVehicles(): Observable<any> {
    const url = `${this.urlBase}vehicles`;
    return this.http.get<any>(url).pipe(take(1));
  }

  getStarships(): Observable<any> {
    const url = `${this.urlBase}starships`;
    return this.http.get<any>(url).pipe(take(1));
  }
}
