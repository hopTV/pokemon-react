export interface Pokemons {
  name: string;
  url: string;
}

export interface PokemonState {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
}

export interface Detail {
  id: number;
  isOpen: boolean;
}

export interface PokemonDetail extends PokemonState {
  abilities?: {
    name: string
    ability: string

  }[]
}