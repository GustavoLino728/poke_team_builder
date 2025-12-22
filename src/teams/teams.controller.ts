import { Controller, Get, Post, Body, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { CreateTeamDTO } from './dto/create-team.dto';
import { UpdateTeamDTO } from './dto/update-team.dto';

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
    constructor(private readonly teamsService: TeamsService) {}

    @Get()
    findAll() {
        return this.teamsService.findAll();
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() createTeamDto: CreateTeamDTO){
        return this.teamsService.create(createTeamDto, 'adfadfs');
    }
}

