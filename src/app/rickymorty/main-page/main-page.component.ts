import { Component, OnInit } from '@angular/core';

interface Character {
  name: string;
  power: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  characters: Character[] = [{ name: "Rick", power: 100 }, { name: "Morty", power: 90 }, { name: "Beth", power: 110 }]

  newCharacter: Character =
    {
      name: '',
      power: 0
    }


  add() {
    this.characters.push(this.newCharacter);
    this.newCharacter = { name: '', power: 0 };
  }

  cambiarNombre(event: any) {
    this.newCharacter.name = event.target.value
  }

  constructor() { }

  ngOnInit(): void {
  }

}
