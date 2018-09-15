//import mySQL connection
var connection = require("../config/connection.js");

//object for all the sequel statments
var orm = {
  //grab all burgers
  findAll: function(cb) {
    var queryString = "SELECT * FROM burgers;";
    connection.query(queryString, function(err,result){
      if(err){
        throw err;
      }
      cb(result);
    });
  },
  //add a new burger
  create: function(vals,cb){
    var queryString = "INSERT INTO burgers (burger_name,devoured) VALUES (?,?)";
    connection.query(queryString,vals,function(err,result){
      if(err){
        throw err;
      }

      cb(result);
    });
  },
  //change devoured on burger
  update: function(value,condition,cb){
    var queryString = "UPDATE burgers SET devoured = ? WHERE id = ?";

    var conditionsArr = [
      {
        devoured: value
      },
      {
        id: condition
      }
    ];

    connection.query(queryString,conditionsArr,function(err,result){
      if(err){
        throw err;
      }

      cb(result);
    });
  }
};

//export for model
module.exports = orm;