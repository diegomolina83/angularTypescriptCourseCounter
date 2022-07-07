import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  name: string = 'Ironman';
  age: number = 45;

  getName(): string {
    return `${this.name} - ${this.age}`
  }

  changeName(): void {
    this.name = 'Spiderman';
  }

  changeAge(): void {
    this.age = 50;
  }
  get nameUpperCase() {
    return this.name.toUpperCase();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
