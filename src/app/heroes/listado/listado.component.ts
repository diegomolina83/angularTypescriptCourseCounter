import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {


  heroes: string[] = ['Spiderman', 'Ironman', 'Thor', 'Wanda', 'Panete'];
  deletedHero: string = '';

  deleteHero() {
    this.deletedHero = this.heroes.shift() || '';
  }
  constructor() { }

  ngOnInit(): void {
  }

}
