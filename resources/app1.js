var express = require("express");
var morgan = require("morgan");
var app = express();
var router = express.Router();

var path = __dirname + '/views/';

router.use(function (req,res,next) {
  console.log("[App1] " + req.method + " " + req.path );
  next();
});

router.get("/",function(req,res){
  console.log(" one " + req.method + " " + req.path );
  res.sendFile(path + "index.html");
});

router.get("/test",function(req,res){
  console.log(" two " + req.method + " " + req.path );
  res.sendFile(path + "test.html");
});

app.use(morgan('tiny'));
app.use(express.static(path));
app.use("/", router);
app.listen(8081, function () {
  console.log('APP1 [:8081] - needs Rewrite - cannot handle absolute');
})
