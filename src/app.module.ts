import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeamsModule } from './teams/teams.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PokeapiModule } from './pokeapi/pokeapi.module';
import { TeamPokemonsController } from './team-pokemons/team-pokemons.controller';
import { TeamPokemonsService } from './team-pokemons/team-pokemons.service';
import { TeamPokemonsModule } from './team-pokemons/team-pokemons.module';

@Module({
  imports: [PrismaModule, TeamsModule, PokeapiModule, TeamPokemonsModule],
  controllers: [AppController, TeamPokemonsController],
  providers: [AppService, TeamPokemonsService],
})
export class AppModule {}
