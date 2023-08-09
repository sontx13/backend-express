const connection = require ("../config/database");
const getAllUsers = async () =>{
     // connection.query(
    //     'SELECT * FROM Users u',
    //     function(err, results, fields) {
    //         users =results;
    //         res.send(JSON.stringify(users));
    //     }
    // );
    let [results, fields] = await connection.query( 'SELECT * FROM Users u');

    return results;
}

const getUsersById = async (userId) =>{
   let [results, fields] = await connection.query( 'SELECT * FROM Users u WHERE id = ?',[userId]);

   console.log(">>>results=="+results);

   let user = results && results.length > 0 ? results[0]: {};

   return user;
}

const updateUsersById = async (email,myname,city,userId) =>{
    let [results, fields] = await connection.query(
        `UPDATE Users SET  email = ? , name =? , city =?
           WHERE id= ?
        `,
       [email, myname, city,userId]
   );
 }
 

module.exports ={
    getAllUsers,getUsersById,updateUsersById
}