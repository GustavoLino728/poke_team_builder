import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';

export class PokemonTeam{
    id: string;
    teamId: string;
    pokemonId: number;
    pokemonName: string;
    position: number;
}

export class Team {
    id: string;
    trainer: string;
    pokemons: PokemonTeam[];
}

@Controller('teams')
export class TeamsController {
    @Get()
    findAll() {
        return 'Esta rota retorna todos os times';
    }

    @Get(':id')
    findOne(@Param() params: any): string{
        return `Esse é o time ${params.id}`;
    }

    @Post()
    create(@Body() Team:Team){
        return 'Time Criado';
    }

    @Put(':id')
    update(@Param() params: any): string{
        return `Time ${params.id} editado`;
    }

    @Delete(':id')
    delete(@Param() params:any): string{
        return `Time ${params.id} deletado`;
    }
}

