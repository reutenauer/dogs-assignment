import { Test, TestingModule } from '@nestjs/testing';

import { DogModel } from './dog.model';

describe('DogModel', () => {
  let model: DogModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DogModel]
    }).compile();

    model = module.get<DogModel>(DogModel);
  });

  it('should be defined', () => {
    expect(model).toBeDefined();
  });
});
