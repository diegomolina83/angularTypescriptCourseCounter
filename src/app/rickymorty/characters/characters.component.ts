import { Component, Input, OnInit } from '@angular/core';
import { RickymortyService } from '../services/rickymorty.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {

  //@Input() characters: any[] = [];

  get characters() {
    return this.rickymortyService.characters;
  }

  constructor(private rickymortyService: RickymortyService) {
  }
}
