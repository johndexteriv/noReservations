const express = require("express");
const app = express();
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 8080;
var path = require("path");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

require("./app/routing/html-routes.js")(app);

app.listen(PORT, function () {
	console.log("APP LISTENING ON PORT: " + PORT);
});
