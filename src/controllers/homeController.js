const connection = require('../config/database');

const getHomepage = (req,res) =>{
    res.render('home.ejs')
}

const getConnection = (req,res) =>{
    let users = [];
    // simple query
    connection.query(
        'SELECT * FROM Users u',
        function(err, results, fields) {
            users =results;
            //console.log(">>results===="+results); // results contains rows returned by server

            //console.log(">>user===="+users); 
            res.send(JSON.stringify(users));
        }
    );
   
}

const getSontx13 = (req,res) =>{
    res.render('sample.ejs')
}

module.exports = {
    getHomepage,getSontx13
}