import { Controller, Get, Param } from '@nestjs/common';

import { Dog } from '@freespee/api-interfaces';
import { DogService } from './dog.service';

@Controller('dogs')
export class DogsController {
  constructor(private readonly dogService: DogService) { }

  @Get('/')
  async getDogs(): Promise<Dog[]> {
    return this.dogService.findAll();
  }

  @Get('/:id')
  async getDog(@Param('id') id: string): Promise<Dog|undefined> {
    return this.dogService.findOne(id);
  }
}
