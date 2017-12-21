import { Component, OnInit } from '@angular/core';
import { Tracker, Workout } from '../models/workout';
import { Router } from '@angular/router';
import { Http } from "@angular/http";
import { WorkoutService } from '../models/workout.service';
import { User } from '../models/user';


@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss','../../styles.css' ]
})
export class TrackComponent implements OnInit {
  me: User;
  constructor(private http: Http, private router: Router, private workoutService: WorkoutService) { }
  
    ngOnInit() {
      //if(this.workoutService.me == null) {
       // this.router.navigate(['/login']);
      //}
      this.http.get(this.workoutService.apiRoot + "/track/routines").subscribe( data =>{
        this.t.workoutlist = data.json();
      });
      this.me = this.workoutService.me;
      setInterval(()=> this.update(), 1000)
    }

    t = new Tracker();
    update(){
      this.http.get(this.workoutService.apiRoot + "/track/workouts").subscribe( data =>{
          this.t.workoutlist = data.json();
      });
      this.http.get(this.workoutService.apiRoot + "/track/myWorkouts").subscribe( data =>{
        this.me.myWorkouts = data.json();
    });
      
    }
    
  
    Add(wName: string) {
    
      var w1 = new Workout(wName);
      
      this.t.myWorkouts.push(w1);
      
      this.http.post(this.workoutService.apiRoot + "/track/myWorkouts", w1).subscribe(res=>{
        this.me.myWorkouts.push( res.json());
        this.t.myWorkouts.push( res.json());
      });
      
      
      console.log(wName);
    }
  
    remove(k: Workout) {
      var index = this.t.myWorkouts.indexOf(k, 0);
      if (index > -1) {
        
        this.me.myWorkouts.splice(index, 1);
      }
    }
  }