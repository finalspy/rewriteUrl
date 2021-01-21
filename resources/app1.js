var fs = require('fs');

// Parameters 
var name="[App1]";
var port=8081;
var basePath="/";

// include common server part
eval(fs.readFileSync('server/common.js')+'');
eval(fs.readFileSync('server/logging.js')+'');
eval(fs.readFileSync('server/routing.js')+'');
