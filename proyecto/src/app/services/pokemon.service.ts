import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pokemon } from '../models/pokemon';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

pokemon: Pokemon[] = [{
    id: 1,
    nivel: 1,
    name: 'Bulbasaur',
    type: ['Planta', 'Veneno'],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
    stats: {
        hp: 45,
        attack: 49,
        defense: 49,
        spattack: 65,
        spdefense: 65,
        speed: 45,
    },
    habilidades: 'Overgrow'
},
{
    id: 239,
    nivel: 24,
    name: 'Blastoise',
    type: ['Agua', 'Agua'],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png',
    stats: {
        hp: 73,
        attack: 45,
        defense: 52,
        spattack: 57,
        spdefense: 44,
        speed: 59
    },
    habilidades: 'Armadura de Batalla'
},
];

pokemon$ = new Observable<Pokemon[]>;


  constructor() {

    this.pokemon$ = new Observable<Pokemon[]>((suscriptor) => {
      suscriptor.next(this.pokemon);

      });
    }


    
  obtenerPokemonPromise(): Promise<Pokemon[] | any>{
    return new Promise((resolve, reject) => {
      if(this.pokemon.length > 0){
        resolve(this.pokemon);
      }else{
        reject({
          codigo: 0,
          mensaje: 'No hay Pokemons disponibles en este momento'
        });
      }
    });
  }


  obtenerPokemonObservable(){
    
    return of(this.pokemon);
    
  }


  agregarPokemon(pokemon: Pokemon){
    this.pokemon.push(pokemon);
   
  }


}

