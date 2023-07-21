export interface PokemonInterface {
    id: number;
    name: string;
    image: string;
    type: string[];
    height: number;
    weight: number;
    baseExperience: number;
}

export interface PokemonProps {
    pokemon: PokemonInterface;
  }


