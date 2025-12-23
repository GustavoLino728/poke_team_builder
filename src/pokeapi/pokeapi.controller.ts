import { Body, Controller, Post } from '@nestjs/common';
import { PokeapiService } from './pokeapi.service';
import { addPokemonDTO } from './dto/pokeapi-dto';

@Controller('pokeapi')
export class PokeapiController {
    constructor(private readonly pokeApiService: PokeapiService){}

    @Post()
    addPokemon(@Body() addPokemonDto: addPokemonDTO){
        return this.pokeApiService.getPokemon(addPokemonDto.pokemonName);
    }
}
