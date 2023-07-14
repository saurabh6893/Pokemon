export interface Pokemon {
    id: number;
    name: string;
    image: string;
    type: string[];
    height: number;
    weight: number;
    baseExperience: number;
}


interface PokemonProps {
    pokemon: Pokemon;
  }