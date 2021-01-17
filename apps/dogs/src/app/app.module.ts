import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DogsComponent } from './dogs.component';
import { DogDetailsComponent } from './dog-details.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: DogsComponent },
  { path: ':id', component: DogDetailsComponent },
];

@NgModule({
  declarations: [AppComponent, DogsComponent, DogDetailsComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
