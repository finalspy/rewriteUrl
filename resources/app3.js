var fs = require('fs');

// Parameters 
var name="[App3]";
var port=8083;
var basePath=process.env.SAAGIE_BASE3_PATH + "/";

// include common server part
eval(fs.readFileSync('common.js')+'');
