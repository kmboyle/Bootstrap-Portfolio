var path = require('path');
var express = require('express');

var app = express.Router();

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/main.html");
})
app.get("/about", function(req, res) {
    res.sendFile(__dirname + "/public/about.html");
})
app.get("/contact", function(req, res) {
    res.sendFile(__dirname + "/public/contact.html");
})
app.get("/portfolio", function(req, res) {
    res.sendFile(__dirname + "/public/portfolio.html");
})
module.exports = app;