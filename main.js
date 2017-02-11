var express = require("express");
var mysql	= require('mysql');
var app 	= express();

//Application Settings
app.use(express.static("public")); //setting up "static folder"
app.set("view engine", "jade"); //jade template engine

//Configuration
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'my_db'
});
 

app.get("/", function(req, res){

	//set up connection with database
	
	connection.connect();
 
	connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
	  if (error) throw error;
	  console.log('The solution is: ', results[0].solution);
	});
	 
	connection.end();

	/*-------------------------------*/


	//res.sendFile(__dirname +"/index.html");
	res.render("index", {title: "My Title", message: "Hello World"}); //render express "view"
});

app.get("/goodbye", function(req, res){
	res.send("goodbye");
});

var server = app.listen(8080, function(){


	console.log("your app is running at http://localhost:8080");
});