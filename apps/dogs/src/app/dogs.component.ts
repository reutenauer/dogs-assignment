import { Component, OnInit } from '@angular/core';
import { Dog } from '@freespee/api-interfaces';
import { DogService } from './dog.service';

@Component({
  selector: 'dogs',
  templateUrl: 'dogs.html',
})

export class DogsComponent {
  public dogs: Dog[];

  constructor(private dogService: DogService) { }

  ngOnInit() {
    this.getDogs();
  }

  getDogs(): void {
    this.dogService.getDogs().subscribe((dogs) => this.dogs = dogs);
  }
}
