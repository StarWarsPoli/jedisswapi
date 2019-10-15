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

  getAllFilms(): Observable<any> {
    const url = `${this.urlBase}films`;
    return this.http.get<any>(url).pipe(take(1));
  }

  getFilmById(id): Observable<any> {
    const url = `${this.urlBase}films/${id}`;
    return this.http.get<any>(url).pipe(take(1));
  }

  getFilmByAllURL(film): Observable<any> {
    const url = film;
    return this.http.get<any>(url).pipe(take(1));
  }

  getPeople(): Observable<any> {
    const url = `${this.urlBase}people`;
    return this.http.get<any>(url).pipe(take(1));
  }

  getPersonById(personId): Observable<any> {
    const url = `${this.urlBase}people/${personId}`;
    return this.http.get<any>(url).pipe(take(1));
  }

  getPersonByAllURL(person): Observable<any> {
    const url = person;
    return this.http.get<any>(url).pipe(take(1));
  }

  getPlanets(): Observable<any> {
    const url = `${this.urlBase}planets`;
    return this.http.get<any>(url).pipe(take(1));
  }

  getPlanetById(planetId): Observable<any> {
    const url = `${this.urlBase}planets/${planetId}`;
    return this.http.get<any>(url).pipe(take(1));
  }

  getPlanetByAllURL(planet): Observable<any> {
    const url = planet;
    return this.http.get<any>(url).pipe(take(1));
  }

  getSpecies(): Observable<any> {
    const url = `${this.urlBase}species`;
    return this.http.get<any>(url).pipe(take(1));
  }

  getSpecieById(specieId): Observable<any> {
    const url = `${this.urlBase}species/${specieId}`;
    return this.http.get<any>(url).pipe(take(1));
  }

  getSpecieByAllURL(specie): Observable<any> {
    const url = specie;
    return this.http.get<any>(url).pipe(take(1));
  }

  getVehicles(): Observable<any> {
    const url = `${this.urlBase}vehicles`;
    return this.http.get<any>(url).pipe(take(1));
  }

  getVehicleById(vehicleById): Observable<any> {
    const url = `${this.urlBase}vehicles/${vehicleById}`;
    return this.http.get<any>(url).pipe(take(1));
  }

  getStarships(): Observable<any> {
    const url = `${this.urlBase}starships`;
    return this.http.get<any>(url).pipe(take(1));
  }

  getStarshipById(starshipById): Observable<any> {
    const url = `${this.urlBase}starships/${starshipById}`;
    return this.http.get<any>(url).pipe(take(1));
  }
}
