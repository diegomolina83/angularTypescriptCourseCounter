import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Contador app';
  counter: number = 0;

  substract() {
    this.counter--;
  }

  add() {
    this.counter++;
  }
}
