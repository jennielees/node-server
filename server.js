// Super lightweight server in node.js
// Useful for working with CDN hosted frontend js libraries
// Take it and do what you like with it
// Jennie Lees, mail@jennielees.net

var fs = require("fs");
var host = "127.0.0.1";
var port = 3333;
var express = require("express");

var app = express();
app.use(app.router); 
app.use(express.static(__dirname)); 

app.listen(port, host);
console.log("Static file server running at\n  => http://" + host + ":" + port + "/\nCTRL + C to shutdown");

