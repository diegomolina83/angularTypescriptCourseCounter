import { Component } from "@angular/core";


@Component({
    selector: 'app-contador',
    templateUrl: 'contador.component.html'
})
export class ContadorComponent {
    title = 'Contador app';
    counter: number = 0;

    substract() {
        this.counter--;
    }

    add() {
        this.counter++;
    }
}