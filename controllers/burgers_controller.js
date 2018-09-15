var express = require("express");
var router = express.Router();

//import model
var burger = require("../models/burger.js");

//create our routes

router.get("/",function(req,res){
  burger.findAll(function(data){
    var hbsObject = {
      burgers: data
    };
    res.render("index",hbsObject);
  })
});

router.post("/api/burgers",function(req,res){
  burger.create([req.body.burger_name, false],function(result){
    res.json({id: result.insertId});
  });

});

router.put("/api/burgers/:id",function(req,res){
  burger.update(true,req.params.id,function(result){
    if(result.changedRow === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

module.exports = router;