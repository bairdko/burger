//require the ORM

var orm = require("../config/orm.js");

var burger = { 
  findAll: function(cb){
    orm.findAll(function(res){
      cb(res);
    });
  },
  create: function(vals,cb){
    orm.create(vals,function(res){
      cb(res);
    });
  },
  update:function(value,condition,cb){
    orm.update(value, condition,function(res){
      cb(res);
    })
  }
};

module.exports = burger;