import { Injectable, NotFoundException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { PokemonData } from './dto/pokeapi-dto';

@Injectable()
export class PokeapiService {
    constructor(private readonly httpService: HttpService){}

    private mapPokemonData(apiData: any): PokemonData {
        return {
            id: apiData.id,
            name: apiData.name,
            types: apiData.types.map((t) => t.type.name),
            sprite: apiData.sprites.front_default,
            moves: apiData.moves.map((t) => t.move.name),
            abilities: apiData.abilities.map((t) => t.ability.name),
        };
    }

    async getPokemon(pokemonName: string): Promise<PokemonData>{

        const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

        try {
            const response = await firstValueFrom(
                this.httpService.get(url),
            );
            const apiData = response.data;

            return this.mapPokemonData(apiData);
            }

        catch (error){
            throw new NotFoundException(`${pokemonName} não encontrado`);
        }
    }

}
