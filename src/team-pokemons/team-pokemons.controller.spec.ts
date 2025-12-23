import { Test, TestingModule } from '@nestjs/testing';
import { TeamPokemonsController } from './team-pokemons.controller';

describe('TeamPokemonsController', () => {
  let controller: TeamPokemonsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TeamPokemonsController],
    }).compile();

    controller = module.get<TeamPokemonsController>(TeamPokemonsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
