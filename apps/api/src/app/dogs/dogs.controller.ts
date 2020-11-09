import { Controller, Get } from '@nestjs/common';

import { Dog } from '@freespee/api-interfaces';

@Controller('dogs')
export class DogsController {
  @Get('/')
  async getDogs(): Promise<Dog[]> {
    return [];
  }

  @Get('/:id')
  async getDog(): Promise<Dog> {
    return {
      name: 'Andersson',
      breed: 'German Shepherd',
      color: '#00ff00',
    };
  }
}
