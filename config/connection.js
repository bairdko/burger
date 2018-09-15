//set up mySQL connection 
var mysql = require("mysql");

//connection parameters
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "burgers_db"
});

//to start connection
connection.connect(function(err){
  if(err){
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);

});

//export to ORM
module.exports = connection;