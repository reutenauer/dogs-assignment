import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DogModel } from './dog.model';

import { DogsController } from './dogs.controller';
import { DogService } from './dog.service';

@Module({
  imports: [TypeOrmModule.forFeature([DogModel])],
  providers: [DogService],
  controllers: [DogsController],
})
export class DogsModule {}
