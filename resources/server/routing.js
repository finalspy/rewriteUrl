var router = express.Router();

var path = __dirname + '/pages/';

// Define routes (under basePath)
router.get("/",function(req,res){
    res.sendFile(path + "index.html");
  });
router.get("/index",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/absolute",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/relative",function(req,res){
  res.sendFile(path + "index.html");
});

// Route pages under basePath
app.use(basePath, router);