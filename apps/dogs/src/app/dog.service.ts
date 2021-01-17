import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Dog } from '@freespee/api-interfaces';

@Injectable({
  providedIn: 'root'
})

export class DogService {
  private dogsUrl = '/api/dogs';

  constructor(private http: HttpClient) { }

  public getDogs(): Observable<Dog[]> {
    return this.http.get<Dog[]>(this.dogsUrl);
  }

  public getDog(id: string): Observable<Dog> {
    return this.http.get<Dog>(`${this.dogsUrl}/${id}`);
  }
}
