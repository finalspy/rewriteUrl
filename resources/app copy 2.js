var express = require("express");
var app = express();
var app2 = express();
var app3 = express();
var app4 = express();
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

router2.get(process.env.SAAGIE_BASE2_PATH+"/",function(req,res){
  console.log(req.method + " " + req.path );
  res.sendFile(path + "index.html");
});

router2.get(process.env.SAAGIE_BASE2_PATH+"/test",function(req,res){
  console.log(req.method + " " + req.path );
  res.sendFile(path + "test.html");
});


app.use(express.static(path));
app.use("/", router);
app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})

app2.use(express.static(path));
app2.use("/", router);
app2.listen(8081, function () {
  console.log('Example app2 listening on port 8081!')
})

app3.use(express.static(path));
app3.use("/", router);
app3.listen(8082, function () {
  console.log('Example app listening on port 8082!')
})

app4.use(express.static(path));
app4.use(process.env.SAAGIE_BASE3_PATH+"/", router);
app4.listen(8083, function () {
  console.log('Example app2 listening on port 8083!')
})
