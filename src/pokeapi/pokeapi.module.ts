import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PokeapiService } from './pokeapi.service';
import { PokeapiController } from './pokeapi.controller';

@Module({
  imports: [HttpModule],
  providers: [PokeapiService],
  exports: [PokeapiService],
  controllers: [PokeapiController],
})
export class PokeapiModule {}
