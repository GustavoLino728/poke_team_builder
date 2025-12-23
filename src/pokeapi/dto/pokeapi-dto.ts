import { MinLength, MaxLength, IsString, Min } from "class-validator";

export interface PokemonData {
  id: number;
  name: string;
  types: string[];
  sprite: string;
  moves: string[];
  abilities: string[];
}

export class addPokemonDTO{
    @IsString()
    @MinLength(3)
    @MaxLength(15)
    pokemonName: string;
}