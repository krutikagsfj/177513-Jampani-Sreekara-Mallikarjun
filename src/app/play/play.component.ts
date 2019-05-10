
import { OnlineGame } from './../model/game.model';
import { Component, OnInit } from '@angular/core';
import { OnlineGamesService } from '../service/online-games.service';
import { Router } from '../../../node_modules/@angular/router';




@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  games :OnlineGame[];
  amount:any;
  constructor(private router: Router , private gameService:OnlineGamesService) { }
  ngOnInit() {
   
   this.gameService.getGames().subscribe(data=>{this.games=data});
   let mm=localStorage.getItem("amt");
   this.amount=mm.toString();
 
   this.amount=this.amount-100;
   console.log(this.amount);
 
  }
 
 
 
 }
 