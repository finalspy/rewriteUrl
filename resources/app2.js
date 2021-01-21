var fs = require('fs');

// Parameters 
var name="[App2]";
var port=8082;
var basePath="/";

// include common server part
eval(fs.readFileSync('common.js')+'');
