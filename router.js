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
app.post('/contactMe', function(req, res) {
    const parsedEmailForm = {
        from: req.body.email,
        to: 'kevin.michael.boyle@gmail.com',
        subject: req.body.name,
        html: `<b>${req.body.message}</b>`
    }
    console.log(parsedEmailForm);
    
})
module.exports = app;