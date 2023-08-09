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

module.exports ={
    getAllUsers
}