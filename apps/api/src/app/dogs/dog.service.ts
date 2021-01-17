import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DogModel } from './dog.model';
import { Dog } from '@freespee/api-interfaces';

@Injectable()
export class DogService {
  constructor(
    @InjectRepository(DogModel)
    private readonly dogsRepository: Repository<DogModel>,
  ) { }

  async findAll(): Promise<DogModel[]> {
    return this.dogsRepository.find();
  }

  async findOne(id: string): Promise<Dog | undefined> {
    return this.dogsRepository.findOne(id)
  }
}
