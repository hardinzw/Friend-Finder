//Setup
var express = require("express");
var bodyParser = require('body-parser')
var path = require("path");

var app = express();

var PORT = process.env.PORT || 8080;

// Set up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Linked html and api routes
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});