const express = require('express')
const {getUsersApi,postCreateUserAPI,putUpdateUserAPI,deleteUserAPI,postUploadSingleFileAPI,postUploadMultipleFileAPI} = require('../controllers/apiController')
const {postCreateCustomerAPI,postCreateArrayCustomerAPI,getCustomersApi,putCustomersApi,deleteCustomerApi,deleteArrayCustomerAPI} = require('../controllers/customerController')
const routerAPI = express.Router()

routerAPI.get('/', (req,res) =>{
    res.send("hello api")
});

routerAPI.get('/users', getUsersApi);
routerAPI.post('/users', postCreateUserAPI);
routerAPI.put('/users', putUpdateUserAPI);
routerAPI.delete('/users', deleteUserAPI);

routerAPI.post('/file', postUploadSingleFileAPI);
routerAPI.post('/files', postUploadMultipleFileAPI);

routerAPI.post('/customers', postCreateCustomerAPI);
routerAPI.post('/customers-many', postCreateArrayCustomerAPI);
routerAPI.get('/customers', getCustomersApi);
routerAPI.put('/customers', putCustomersApi);
routerAPI.delete('/customers', deleteCustomerApi);
routerAPI.delete('/customers-many', deleteArrayCustomerAPI);

module.exports = routerAPI