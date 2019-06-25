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

