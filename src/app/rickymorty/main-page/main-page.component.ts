import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/rickymorty.interface';
import { RickymortyService } from '../services/rickymorty.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {


  newCharacter: Character =
    {
      name: '',
      power: 0
    }

  constructor() {

  }

  ngOnInit(): void {
  }


}
