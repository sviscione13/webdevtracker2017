import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { User} from '../models/User';
import { Workout } from '../models/workout';
import { WorkoutService } from '../models/workout.service';
import { Router } from '@angular/router';

declare const FB: any;

@Component({
  selector: 'app-seeothers',
  templateUrl: './seeothers.component.html',
  styleUrls: ['./seeothers.component.scss','../../styles.css']
})
export class SeeOthersComponent implements OnInit {
    
    users: User[] = [];
    
    constructor(private router: Router, private http: Http, private w: WorkoutService) {
    }

    ngOnInit(){
        setInterval(()=> this.update(), 1000)
    }

    update(){
        this.http.get(this.w.apiRoot + "/track/users").subscribe( data =>{
            this.users = data.json();
    });
    }
}   












