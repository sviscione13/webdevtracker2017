import { Workout } from "./workout";

export class User {
  constructor(n: string, ID: string, pic: string) {
    this.name = n;
    this.id = ID;
    this.pic = pic;
    
  }
    name: string;
    id: string;
    pic: string;
    
    
    
   
    
    myWorkouts: Workout[] = [];
   
}


