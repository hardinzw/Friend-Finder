//Setup
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path")

var app = express();

var PORT = process.env.PORT || 8080;

// Set up to parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

//Linked html and api routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});