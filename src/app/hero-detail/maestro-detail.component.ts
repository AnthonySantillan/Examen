import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './maestro-detail.component.html',
  styleUrls: ['./maestro-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero | null = null;
  
  constructor() { }

  ngOnInit() {
  }

}
