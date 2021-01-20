var express = require("express");
var app = express();
var router = express.Router();

var path = __dirname + '/views/';

router.use(function (req,res,next) {
  console.log(req.method + " " + req.path );
  next();
});

router.get("/",function(req,res){
  console.log(req.method + " " + req.path );
  res.sendFile(path + "index.html");
});

router.get("/test",function(req,res){
  console.log(req.method + " " + req.path );
  res.sendFile(path + "test.html");
});

app.use(express.static(path));
app.use("/", router);
app.listen(8082, function () {
  console.log('APP2 [:8082] - needs Rewrite - cannot handle absolute')
})
