const express = require('express')
const {getUsersApi,postCreateUserAPI,putUpdateUserAPI,deleteUserAPI} = require('../controllers/apiController')
const routerAPI = express.Router()

routerAPI.get('/', (req,res) =>{
    res.send("hello api")
});

routerAPI.get('/users', getUsersApi);

routerAPI.post('/users', postCreateUserAPI);

routerAPI.put('/users', putUpdateUserAPI);

routerAPI.delete('/users', deleteUserAPI);

module.exports = routerAPI