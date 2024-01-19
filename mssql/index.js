var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./app/views");

var bodyParser= require('body-parser');
app.use(bodyParser.json());

var stdRouter = require('./app/routers/user.router')(app);

var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(3000);
// Home calling
app.get("/", function(req, res){
    res.render("home")
});


