import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { DogService } from './dog.service';

describe('DogService', () => {
  let service: DogService;

  beforeEach(async() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] }).compileComponents();
    service = TestBed.inject(DogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
