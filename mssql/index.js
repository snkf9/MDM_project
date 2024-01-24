var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./app/views");
app.post('/screen_manager', function(req, res){
    res.redirect('/manager')   
});
app.post('/screen_partdata', function(req, res){
    res.redirect('/partdata')   
})
app.post('/screen_measuare', function(req, res){
    res.redirect('/measuare')   
})
app.post('/screen_checksheet', function(req, res){
    res.redirect('/checksheet')   
})
var bodyParser= require('body-parser');
app.use(bodyParser.json());

var stdRouter = require('./app/routers/user.router')(app);

var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(3000);
// MANAGER calling
app.get("/manager", function(req, res){
    res.render("manager")
});
// PARTDATA  calling
app.get("/partdata", function(req, res){
    res.render("partdata")
});
// measuare calling
app.get("/measuare", function(req, res){
    res.render("measuare")
});
// check sheet calling
app.get("/checksheet", function(req, res){
    res.render("checksheet")
});
// Home calling
app.get("/", function(req, res){
    res.render("home")
});


