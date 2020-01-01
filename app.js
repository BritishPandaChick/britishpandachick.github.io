var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.listen(process.env.PORT, process.env.IP, function(){
  console.log("Portfolio is connected");
});
