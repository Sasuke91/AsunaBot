mysql = require('mysql'); // Database connection

var dbConnectionInfo = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'johannw2004',
    database: 'db_bot',
    charset: 'utf8mb4',
    dateStrings: true
});

//create mysql connection pool
var dbconnection = mysql.createPool(
    dbConnectionInfo
  );
  
  // Attempt to catch disconnects 
  dbconnection.on('connection', function (connection) {
    console.log('DB Connection established');
  
    connection.on('error', function (err) {
      console.error(new Date(), 'MySQL error', err.code);
    });
    connection.on('close', function (err) {
      console.error(new Date(), 'MySQL close', err);
    });
  
  });
  
  
  module.exports = dbconnection;
