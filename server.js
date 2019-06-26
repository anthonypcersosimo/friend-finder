// Require in dependencies
const mysql = require("mysql");
const express = require("express");
const fs = require("fs");
const path = require("path");


const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Route that sends the user the home page when they hit the home path
app.get("/", function(req, res) {
    var homeFunc = require('./app/routing/htmlRoutes');
    homeFunc.home(res);
});

// Route that sends the user the survey page when they hit the survey path
app.get("/survey.html", function(req, res) {
    var surveyFunc = require('./app/routing/htmlRoutes');
    surveyFunc.survey(res);
});

// Firends API that takes in data from the survey and adds userData to the friends.js array
app.get("/api/friends",function(req, res) {
    var friendsFunc = require('./app/data/friends');
    res.json(friendsFunc);
});

// Now we need a post request when someone submits the form that Pat is building
app.post("/api/friends",function(req, res){
    var friendsFunc = require('./app/data/friends');
    var newFriend = req.body;
    friendsFunc.push(newFriend);
    console.log(friendsFunc);
})


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening at http://localhost/" + PORT);
});