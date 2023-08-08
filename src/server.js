require('dotenv').config();
const express = require('express');
const path = require('path');

const configViewEngine = require('./config/viewEngine');
const webRouters = require('./routes/web');
// get the client
const mysql = require('mysql2');

const app = express();
const port = process.env.PORT||3000;
const hostname = process.env.HOST_NAME;

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3307,
  user: 'root',
  password: '123456',
  database: 'nodejs_express'
});

// simple query
connection.query(
  'SELECT * FROM Users u',
  function(err, results, fields) {
    console.log(">>results===="+results); // results contains rows returned by server
    console.log(">>fields===="+fields); // fields contains extra meta data about results, if available
  }
);

//console.log(process.env);
//config template engine
configViewEngine(app);
//routers
app.use('/',webRouters );

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})