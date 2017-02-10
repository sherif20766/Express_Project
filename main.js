var express = require("express");
var app = express();

app.get("/", function(req, res){
	res.sendFile(__dirname +"/index.html");
});

app.get("/goodbye", function(req, res){
	res.send("goodbye");
});

var server  = app.listen(8080, function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log("your app is running at http://%s:%s", host, port);
});