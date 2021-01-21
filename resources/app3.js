var fs = require('fs');

// Parameters 
var name="[App3]";
var port=8083;
var basePath=process.env.SAAGIE_BASE3_PATH + "/";

// include common server part
eval(fs.readFileSync('server/common.js')+'');
eval(fs.readFileSync('server/logging.js')+'');
eval(fs.readFileSync('server/routing.js')+'');

