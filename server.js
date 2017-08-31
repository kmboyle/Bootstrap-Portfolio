var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var Handlebars = require('handlebars');
var router = require('./router');
var app = express();

var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride("_method"));


app.use(express.static('public'));

app.use("/", router);


app.listen(PORT, function() {

    console.log("Server listening on port " + PORT);
});