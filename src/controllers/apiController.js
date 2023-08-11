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


const putUpdateUserAPI = async (req,res) =>{
    let email = req.body.email;
    let myname = req.body.myname;
    let city = req.body.city;
    let userId = req.body.userId;

    let user =  await User.updateOne({_id:userId},{email:email,name:myname,city:city})

    return res.status(200).json({
        errorcode: 0,
        data:user
    })
    
}

const deleteUserAPI = async (req,res) =>{
   
    let userId = req.body.userId;

    let user = await User.deleteOne({_id:userId});
 
    return res.status(200).json({
        errorcode: 0,
        data:user
    })
    
}


module.exports = {getUsersApi,postCreateUserAPI,putUpdateUserAPI,deleteUserAPI}