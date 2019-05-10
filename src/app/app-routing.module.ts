import { GameCityComponent } from './game-city/game-city.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes =[
    { path:'game_city',component:GameCityComponent },
]
@NgModule({
    imports: [CommonModule, RouterModule.forRoot(routes)],
    exports:[RouterModule],
    declarations: []
  })
  export class AppRoutingModule { }
  