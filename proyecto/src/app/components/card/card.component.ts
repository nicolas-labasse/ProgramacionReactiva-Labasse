import { Component, OnInit } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  pokemon!: Pokemon[]; 
  pokemon$: Observable<Pokemon[]>;
  suscripcion: any;
  promesa: any;
  blastoise: any;
 


  constructor(

    private pokemonService : PokemonService

  ) {
      this.promesa = pokemonService.obtenerPokemonPromise()
      .then((valor: Pokemon[]) => {
      this.pokemon = valor;
     }).catch((error: any) => {
      console.error(error);
     });

     this.suscripcion = pokemonService.obtenerPokemonObservable().subscribe({
      next: (pokemon: Pokemon[]) => {
        this.pokemon = pokemon;
      },
      error: (error) => {
        console.error(error);
      }
    });
    this.pokemon$ = pokemonService.obtenerPokemonObservable();


   }


   ngOnDestroy(){
    this.suscripcion.unsubscribe();
  }
   

  ngOnInit(): void {
   of(this.pokemon).pipe(
         map((pokemon: Pokemon[]) => pokemon.filter((pokemon: Pokemon) => pokemon.name === 'Blastoise' ))
       ).subscribe((pokemon) => {
        this.blastoise = pokemon;
        console.log('Desde el of: ', pokemon);
       });
  }



  agregarPokemon(){
    let pokemon: Pokemon = {
      id: 236,
      nivel: 19,
      name: 'Charizard',
      type: ['Fuego', 'Volador'],
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
      stats: {
          hp: 59,
          attack: 36,
          defense: 47,
          spattack: 39,
          spdefense: 47,
          speed: 40,
      },
      habilidades: 'Indefenso'
      }
    this.pokemonService.agregarPokemon(pokemon);
  }
  agregarPokemonObservable(){
    let pokemon: Pokemon = {
      id: 106,
      nivel: 19,
      name: 'Hitmonlee',
      type: ['Lucha', 'Lucha'],
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/106.png',
      stats: {
          hp: 50,
          attack: 53,
          defense: 48,
          spattack: 53,
          spdefense: 48,
          speed: 64,
      },
      habilidades: 'Indefenso'
      }
    this.pokemonService.agregarPokemon(pokemon);
  }

}
