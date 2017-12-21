import * as $ from 'jquery';

export class WorkoutList {
    name: string;
    
}

export class YourWorkoutList{
    name: string;
    date: string;
    constructor(name:string,  date:string) {
        this.name = name;
        this.date = date;
    }
}

export class List{
    workoutList: WorkoutList[] = [
        { name: "Went For A Run"},
        { name: "Went For A Swim"},
        { name: "Went For A Bike Ride"},
        { name: "Went Hiking"},
        { name: "Lifted Weights"},
        { name: "Sit-Ups"},
        { name: "Push-Ups"},
        { name: "Squats"},
        { name: "Played Football"},
        { name: "Played Hockey"},
        { name: "Played Basketball"},
        { name: "Played Soccer"}];
        
    drawWorkout() {
        $("#workout-list").html(
            this.workoutList.map(x=> `<button class="list-group-item">${x.name}</button>`).join("")
        );
    }

}

export class User{
    yourWorkouts: YourWorkoutList[] = [];
    date: string;
    
    drawYourWorkouts() {
        $("#your-workouts").html(
            this.yourWorkouts.map(x=> `<li class="list-group-item">${x.name} ${x.date}</li>`).join("")
        );
    }
}

//Controller
const user = new User();
const list = new List();
const date = new Date();
let noncomplete: boolean = true;


list.drawWorkout();

$('.list-group-item').click(function(e) {
    e.preventDefault();
    const excName = e.target.textContent;
    const newWorkout = new YourWorkoutList(excName, date.toString());
    if(noncomplete) {
        document.getElementById('default-message').remove();
        noncomplete = false;
    }
    user.yourWorkouts.push(newWorkout);
    console.log(user.yourWorkouts);
    user.drawYourWorkouts();
});