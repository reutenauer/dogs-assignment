import { Test, TestingModule } from '@nestjs/testing';

import { DogsController } from './dogs.controller';
import { DogsModule } from './dogs.module';
import { Connection } from 'typeorm';

describe('DogsController', () => {
  let controller: DogsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DogsController],
      imports: [DogsModule, Connection],
    }).compile();

    controller = module.get<DogsController>(DogsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
