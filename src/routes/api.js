const express = require('express')
const {getUsersApi,postCreateUserAPI} = require('../controllers/apiController')
const routerAPI = express.Router()

routerAPI.get('/', (req,res) =>{
    res.send("hello api")
});

routerAPI.get('/users', getUsersApi);

routerAPI.post('/users', postCreateUserAPI);

module.exports = routerAPI