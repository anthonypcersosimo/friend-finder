// Require in dependencies
var mysql = require("mysql");
var express = require("express");
var fs = require("fs");
var path = require("path");


const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Basic route that sends the user text when they hit the home path
app.get("/index.html", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Route that contains JSON data of all users who booked a reservation
app.get("/api/tables.html", function(req, res) {

});

// Matt do you wanna do the next .get below for the waitlist???
app.get("/api/reservation.html",function(req,res) {
    
});

// Now we need a post request when someone submits the form that Pat is building
app.post("/api/reservation",function(req, res){

})


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening at http://localhost/" + PORT);
});