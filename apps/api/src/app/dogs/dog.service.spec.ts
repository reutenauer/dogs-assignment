import { Test, TestingModule } from '@nestjs/testing';

import { DogService } from './dog.service';
import { DogsModule } from './dogs.module';
import { Connection } from 'typeorm';

describe('DogService', () => {
  let service: DogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DogsModule, Connection],
    }).compile();

    service = module.get<DogService>(DogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
