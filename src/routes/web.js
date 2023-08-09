const express = require('express')
const {getHomepage,getSontx13,postCreateUser,getCreatePage,getEditPage,postUpdateUser} = require('../controllers/homeController')
const router = express.Router()

router.get('/', getHomepage)

router.get('/create',getCreatePage)
router.post('/create-user',postCreateUser)

router.get('/edit/:id',getEditPage)
router.post('/update-user',postUpdateUser)

router.get('/sontx13',getSontx13)

module.exports = router