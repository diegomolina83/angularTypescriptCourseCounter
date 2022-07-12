import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../interfaces/rickymorty.interface';
import { RickymortyService } from '../services/rickymorty.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  @Input() newCharacter: Character =
    {
      name: '',
      power: 0
    };

  constructor(private rickymortyService: RickymortyService) { }

  //@Output() onNewCharacter: EventEmitter<Character> = new EventEmitter<Character>();

  add() {

    //this.onNewCharacter.emit(this.newCharacter);
    this.rickymortyService.addCharacter(this.newCharacter)
    this.newCharacter = { name: '', power: 0 };
  }

  cambiarNombre(event: any) {
    this.newCharacter.name = event.target.value
  }

}
