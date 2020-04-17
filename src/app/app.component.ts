import { Component } from '@angular/core';
import { InterstellarService } from './interstellar-service.service';
import { Planet } from './model/planet';
import { Route } from './model/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'discoverit';
  planets = []
  source: Planet = {
    name: "Earth",
    id: "A"
  }
  destination: Planet = {
    name: "Moon",
    id: "B"
  }
  
  routes: Route[];

  constructor(private interstellarService: InterstellarService) {
    this.interstellarService.getAllPlanets()
      .subscribe(pl => this.planets = pl)
  }

  SourceSelected(planet: Planet) {
    this.source = planet
  }

  DestinationSelected(planet: Planet) {
    this.destination = planet
  }

  calculate() {
    this.interstellarService.findShortestRoute(this.source, this.destination)
      .subscribe(rt => this.routes = rt)
  }

}
