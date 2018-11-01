// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

// Heroku port
var PORT = process.env.PORT || 8080;

// BodyParser 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));

// Routes
require(path.join(__dirname, '/app/routing/apiRoutes.js'))(app);
require(path.join(__dirname, '/app/routing/htmlRoutes.js'))(app);

// Listener
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});