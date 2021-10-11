const express = require('express')
const router = express.Router()

const { register } = require('../controllers/User/UserController')


router.post('/register', register)

module.exports = router