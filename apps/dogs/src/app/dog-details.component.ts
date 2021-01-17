import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Dog } from '@freespee/api-interfaces';
import { DogService } from './dog.service';

@Component({
  selector: 'dog-details',
  templateUrl: 'dog-details.html',
})

export class DogDetailsComponent {
  public dog: Dog;

  constructor(private dogService: DogService, private route: ActivatedRoute) { }

  ngOnInit() {
      let id: string | null = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.getDog(id);
      }
  }

  getDog(id: string): void {
    this.dogService.getDog(id).subscribe((dog) => this.dog = dog);
  }
}
