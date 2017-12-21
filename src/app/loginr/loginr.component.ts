import { Component, OnInit } from '@angular/core';
import { Injectable } from "@angular/core";
import { WorkoutService } from '../models/workout.service';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { Http } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";

declare var window: any;
declare var FB: any;

@Component({
  selector: 'app-loginr',
  templateUrl: './loginr.component.html',
  styleUrls: ['./loginr.component.scss','../../styles.css']
})
export class LoginrComponent implements OnInit {
    me: User;
    name:string;
    password: string;
    apiRoot: string;

    ngOnInit() {
    }

    constructor(private http: Http, private router: Router, private workoutService: WorkoutService) {}
     

    
    
      loginFB() {
        this.workoutService.loginFB();
      }
    
      login(name: string, password: string, ID?: string, pic?: string) {
        this.workoutService.login(name, password, ID, pic);
    
    
      }
    }
    



