//const express = require("express");
//const seeOthers = require("./workoutObject");

//const router = express.Router();

//router
//.get("/seeOthers", (req, res) => res.send(seeOthers))
//.get("/room", (req, res) => res.send(seeOthers.room))
//.post("/room/users", (req, res) => {
  //if (req.body.password == "password") {
    //let user = seeOthers.room.users.find(x => x.fbid == req.body.fbid);
    //if (!user) {
      //user = {
        //name: req.body.name,
        //id: share.room.users.length,
        //fbid: req.body.fbid,
        //picture: req.body.picture
      //};
      //seeOthers.room.users.push(user);
    //}
    //res.status(201).send(user);
  //}// else {
    //res.status(403).send("Invalid Password");
  //}
//});

const express = require("express");
const track = require("./workoutObject");

const router = express.Router();

router
    .get("/workouts", (req, res) => res.send(track.routines))
    .get("/myWorkouts", (req, res) => res.send(track.myWorkouts))
    .get("/users", (req, res) => res.send(track.users))
    .post("/myWorkouts",(req, res) => {
        track.myWorkouts.push(req.body);
    })
    .post("/users",(req, res) => {
        if(req.body.password == "password"){
            let user = track.users.find(x=> x.fbid == req.body.fbid);
            if(!user){
                user = { name: req.body.name, id: track.users.length, fbid: req.body.fbid, picture: req.body.picture };
                track.users.push(user);
            }
            res.status(201).send(user);
        }else{
            res.status(403).send("Invalid Password");            
        }
    })

module.exports.router = router;