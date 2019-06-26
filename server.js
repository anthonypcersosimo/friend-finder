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

// Require in our Route Files
var homeFunc = require('./app/routing/htmlRoutes');
var surveyFunc = require('./app/routing/htmlRoutes');
var apiGetFunc = require('./app/routing/apiRoutes');
var apiPostFunc = require('./app/routing/apiRoutes');

// Route that sends the user the home page when they hit the home path
app.get("/", function(req, res) {
    homeFunc.home(res);
});

// Route that sends the user the survey page when they hit the survey path
app.get("/survey.html", function(req, res) {
    surveyFunc.survey(res);
});

// Firends API that takes in data from the survey and adds userData to the friends.js array
app.get("/api/friends",function(req, res) {
    apiGetFunc.apiGet(res);
});

// Posts data from HTML form into the Friends API
app.post("/api/friends",function(req, res){
    apiPostFunc.apiPost(req, res);
})


// Spin up server
app.listen(PORT, function() {
    console.log("App listening at http://localhost/" + PORT);
});