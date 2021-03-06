var express = require("express");
var app = express();

// use static path for resources : js / css / img ...
app.use(basePath, express.static(__dirname + '/static/'));

// Listen to connections on port ... 
app.listen(port, function () {
  console.log(name + ' is running on port [:' + port + '] with basepath of [' + basePath + '] !');
})