var {conn, sql} = require('../../connect');
var User = require('../models/user.model');
var model = new User();
exports.getList = function(req, res){
    model.getAll(function(err, data){
        res.send({result: data, error: err});
    });
  
};

exports.getById = function(req, res){
    //SELECT * FROM test WHERE Id?
    model.getOne(req.params.id, function(err, data){
        res.send({result: data, error: err});
    });
   
};

exports.addNew = function(req, res){
        
    model.create(req.body, function(err, data){
        res.send({result: data, error: err});
    });
};

exports.update = function(req, res){
    // UPDATE table SET ... = ...
    model.update(req.params.id, function(err, data){
        res.send({result: data, error: err});
    });
   
};

exports.delete = function(req, res){
    model.delete(req.params.id, function(err, data){
            res.send({result: data, error: err});
        });
    }
