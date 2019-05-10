import { OnlineGamesService } from './../service/online-games.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormControl } from '../../../node_modules/@angular/forms';
import { HttpClientModule } from '@angular/common/http';




@Component({
selector: 'app-game-city',
templateUrl: './game-city.component.html',
styleUrls: ['./game-city.component.css']

})

export class GameCityComponent implements OnInit {


  gameForm: FormGroup;
  submitted: boolean = false;
  amountt:any;
 
   constructor(private formBuilder: FormBuilder, private router: Router) { }
 
   ngOnInit() {
     this.gameForm=this.formBuilder.group({
       name:['',Validators.required],
       address:['',Validators.required]
   
     
      });
   }
   amount= new FormControl('');

  submit(){
   this.submitted = true;
 if(this.gameForm.invalid){
 
 return;
 
   }
 
  localStorage.setItem("amount",this.amount.value);
  console.log(this.amount);
   this.router.navigate(['play']);
  }
 
  getAmount(){
   localStorage.setItem("amount",this.amount.value);
  }
 
 }
 