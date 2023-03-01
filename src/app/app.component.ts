import { Component } from '@angular/core';
import { HeroService } from './hero.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
  heroes: Hero[] = [];
  constructor(private heroService: HeroService) {}
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
}
