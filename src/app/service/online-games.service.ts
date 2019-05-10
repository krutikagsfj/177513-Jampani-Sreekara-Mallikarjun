import { OnlineGame } from './../model/game.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OnlineGamesService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:3000/games'
  
  getGames(){

    return this.http.get<OnlineGame[]>(this.baseUrl);
  
   }

}
