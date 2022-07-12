import { Injectable } from "@angular/core";
import { Character } from "../interfaces/rickymorty.interface";


@Injectable()
export class RickymortyService {
    private _characters: Character[] = [
        {
            name: "Rick",
            power: 100
        },
        {
            name: "Morty",
            power: 90
        },
        {
            name: "Beth",
            power: 110
        }];

    get characters(): Character[] {
        return [...this._characters];
    }


    constructor() {
    }

    addCharacter(character: Character) {
        this._characters.push(character);
    }


}