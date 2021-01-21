var fs = require('fs');

// Parameters 
var name="[Main]";
var port=8080;

var express = require("express");
var app = express();
//var router = express.Router();

// Define routes (under basePath)
app.get("/",function(req,res){
    res.sendFile(__dirname + '/pages/main.html');
});

// use static path for resources : js / css / img ...
app.use(express.static(__dirname + '/static/'));
//app.use("/", router);

// Listen to connections on port ... 
app.listen(port, function () {
  console.log( name + ' is running on port [:' + port + '] ...');
})
