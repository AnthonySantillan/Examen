import { Injectable } from '@angular/core';
import { Hero } from './hero'
import { HEROES } from './mock-heroes'
import { Observable, of } from 'rxjs';
import { MensajesService } from './mensajes.service'
@Injectable({
  providedIn: 'root'
})
export class MaestroService {

  constructor(private messageService: MensajesService) { }

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message after fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
