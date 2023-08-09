const express = require('express')
const {getHomepage,getSontx13,postCreateUser,getCreatePage} = require('../controllers/homeController')
const router = express.Router()

router.get('/', getHomepage)
  
router.get('/sontx13',getSontx13)
router.get('/create',getCreatePage)

router.post('/create-user',postCreateUser)

module.exports = router