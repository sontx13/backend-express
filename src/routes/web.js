const express = require('express')
const {getHomepage,getSontx13} = require('../controllers/homeController')
const router = express.Router()

router.get('/', getHomepage)
  
router.get('/sontx13',getSontx13)

module.exports = router