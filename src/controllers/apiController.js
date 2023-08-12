const User = require('../model/User');
const {uploadSingleFile,uploadMultipleFile} = require('../services/fileService');

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

const postUploadSingleFileAPI = async (req,res) =>{
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    } 

    console.log(">>>file==="+req.files.image);
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let results = await uploadSingleFile(req.files.image);
    console.log(">>>results==="+results);

    return res.status(200).json({
        errorcode: 0,
        data:"oki SingleFile"
    })
    
}

const postUploadMultipleFileAPI = async (req,res) =>{
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }  

    if (Array.isArray(req.files.image)) {
        let results = await uploadMultipleFile(req.files.image);
        return res.status(200).json({
            errorcode: 0,
            data:results
        })
    } else {
        return await postUploadSingleFileAPI(req,res);
    }
    
   
    
}



module.exports = {getUsersApi,postCreateUserAPI,putUpdateUserAPI,deleteUserAPI,postUploadSingleFileAPI,postUploadMultipleFileAPI}