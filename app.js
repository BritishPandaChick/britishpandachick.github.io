var express = require("express"),
    app = express();
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
  res.render("landing");
});

app.get("/about", function(req, res){
  res.render("about");
});

app.get("/portfolio", function(req, res){
  res.render("portfolio");
});

app.listen(port, () => console.log("Portfolio server is connected"));
