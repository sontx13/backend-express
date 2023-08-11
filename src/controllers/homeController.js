const connection = require('../config/database');
const {getAllUsers,getUsersById,updateUsersById,deleteUsersById} = require('../services/CRUDservice');
const User = require('../model/User');


const getHomepage = async (req,res) =>{
   
    let results = await User.find({});
    //let results =[];
    //console.log("results=="+results);

    res.render('home.ejs',{listUsers:results})
}

const getCreatePage = (req,res) =>{
    res.render('create.ejs')
}

const postCreateUser = async (req,res) =>{
    console.log(">>req.body==="+req.body);
    let email = req.body.email;
    let myname = req.body.myname;
    let city = req.body.city;

    // let [results, fields] = await connection.query(
    //      `INSERT INTO Users(email, name, city) VALUES(?,?,?)`,
    //     [email, myname, city]
    // );
    // console.log(results);

    await User.create({
        email:email,
        name:myname,
        city:city,
    })

    res.send('create new user success')
    
}

const getEditPage = async(req,res) =>{
    const userId = req.params.id;
    let user = await getUsersById(userId);
    console.log("userId=="+userId);
    res.render('edit.ejs',{userEdit:user})
}

const postUpdateUser = async (req,res) =>{
    //console.log(">>req.body==="+req.body);
    let email = req.body.email;
    let myname = req.body.myname;
    let city = req.body.city;
    let userId = req.body.userId;

    await updateUsersById(email,myname,city,userId);

    res.redirect('/')
    //console.log(results);
    //res.send('updated new user success')
    
}

const postDeleteUser = async (req,res) =>{
   
    let userId = req.params.id;
    let user = await getUsersById(userId);
    //await updateUsersById(userId);
    res.render('delete.ejs',{userEdit:user})
    //res.redirect('/')
    
}

const postRemoveUser = async (req,res) =>{
   
    let userId = req.body.userId;
    await deleteUsersById(userId);
    //await updateUsersById(userId);
    //res.render('delete.ejs',{userEdit:user})
    res.redirect('/')
    
}

const getSontx13 = (req,res) =>{
    res.render('sample.ejs')
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
module.exports = {
    getHomepage,getSontx13,postCreateUser,getCreatePage,getEditPage,postUpdateUser,postDeleteUser,postRemoveUser
}