const express = require('express')

// controller functions
const { loginUser, signupUser,getAllUser,deleteAllUser } = require('../controllers/userController')

const router = express.Router()

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

router.get('/',getAllUser)
router.delete('/',deleteAllUser)

module.exports = router