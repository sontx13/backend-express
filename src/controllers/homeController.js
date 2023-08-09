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

const postCreateUser = (req,res) =>{
    console.log(">>req.body==="+req.body);
    let email = req.body.email;
    let myname = req.body.myname;
    let city = req.body.city;

    console.log("email=="+email);
    console.log("myname=="+myname);
    console.log("city=="+city);
    connection.query(
        `INSERT INTO
        Users(email, name, city)
        VALUES(?,?,?)`,
        [email, myname, city],
        function(err, results){
            console.log(results);
            res.send('create new user success')
            
        }
    );
    
}

const getSontx13 = (req,res) =>{
    res.render('sample.ejs')
}


module.exports = {
    getHomepage,getSontx13,postCreateUser
}