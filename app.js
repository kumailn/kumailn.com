var express = require("express");
var favicon = require('serve-favicon');
var app = express();

var port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(favicon(__dirname + '/public/favicon.ico'));

app.get("/s", function(req, res){
  res.render("home");
});

app.get("/d", function(req, res){
    res.render("s");
});

app.get("/", function(req, res){
    res.render("newhome");
});

app.get("/d", function(req, res){
   res.render("index");
});

app.listen(port, function(){
  console.log("Server started on port " + port);
});
