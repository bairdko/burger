//require express and body parser
var express = require("express");
var bodyParser = require("body-parser");

//set up port for testing or heroku
var PORT = process.env.PORT || 8080;

//save express
var app = express();

//gets the html for the website
app.use(express.static("public"));

//set up body parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//set handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars",exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT,function(){
  console.log("App now listening at localhost:" + PORT);
})