import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Planet } from './model/planet';
import { environment } from 'src/environments/environment';
import { Route } from './model/route';
@Injectable({
  providedIn: 'root'
})
export class InterstellarService {


  constructor(private http: HttpClient) {
  }

  getAllPlanets(): Observable<Planet[]> {
    return this.http.get<Planet[]>(`${environment.url}/planet`,{ 
    headers: new HttpHeaders(
      {
          'Content-Type': 'application/json',
      })});
  }
  
  findShortestRoute(source: Planet, destination: Planet): Observable<Route[]> {
    return this.http.get<Route[]>(`${environment.url}/route/shortest?planetA=${source.id}&planetB=${destination.id}`, {
        headers: new HttpHeaders(
            {
                'Content-Type': 'application/json',
            })   
    });
}
}