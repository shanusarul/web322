var express = require("express");

var app = express();

var HTTP_PORT = process.env.PORT || 8080;


// setup a 'root' route to listen on the default url path (i.e. '/')

app.get("/", (req, res) => {

res.send("Hello World!<br /><a href ='/about'> go to the about page</a>");

});


// define a route (i.e. an endpoint) to listen on the '/about' url path

app.get("/about", (req, res) => {

res.json({course: "WEB322",student:"shanus Arulanantham", task: "In-class Assignment 1",date : new Date()});

});
+

// setup http server to listen on HTTP_PORT

app.listen(HTTP_PORT);