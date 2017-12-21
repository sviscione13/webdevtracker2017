export class Workout {
    name: string;
    
    constructor(n: string, ) {
        this.name = n;
        
      }
}
export class Tracker {
    workoutlist:Workout[] = [];
    myWorkouts: Workout[] = [];
   
}