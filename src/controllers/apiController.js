const User = require('../model/User');


const getUsersApi = async (req,res) =>{
   
    let results = await User.find({});
    return res.status(200).json({
        errorcode: 0,
        data:results
    })
}

module.exports = {getUsersApi}