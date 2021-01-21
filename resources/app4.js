var fs = require('fs');

// Parameters 
var name="[App4]";
var port=8084;
var basePath=process.env.SAAGIE_BASE4_PATH + "/";

// include common server part
eval(fs.readFileSync('server/common.js')+'');
eval(fs.readFileSync('server/logging.js')+'');
eval(fs.readFileSync('server/routing.js')+'');
