var path = require('path');
var express = require('express');
const nodemailer = require('nodemailer');


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
    const smtpTransport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        secureConnection: false,
        port: 587,
        auth: {
            user: '',
            pass: ''
        }
    });
    const response = mailResponse(parsedEmailForm, smtpTransport);
    if (response === true) {
        res.sendStatus(200);
    } else {
        res.send(404, response);
    }
});
    
    function mailResponse(email, transport) {
        transport.sendMail(email, function(err, res) {
            if (err) {
                return err;
            } else {
                return true;
            }
    });
}
    

module.exports = app;