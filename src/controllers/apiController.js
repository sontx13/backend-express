const User = require('../model/User');


const getUsersApi = async (req,res) =>{
   
    let results = await User.find({});
    return res.status(200).json({
        errorcode: 0,
        data:results
    })
}

const postCreateUserAPI = async (req,res) =>{
    console.log(">>req.body==="+req.body);
    let email = req.body.email;
    let myname = req.body.myname;
    let city = req.body.city;

    let user = await User.create({
        email:email,
        name:myname,
        city:city,
    })

    return res.status(200).json({
        errorcode: 0,
        data:user
    })
    
}
module.exports = {getUsersApi,postCreateUserAPI}