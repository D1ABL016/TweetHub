const express = require('express');
const router = express.Router()
const userController = require('../Controllers/User')

router.post('/login',userController.Login)

router.post('/signUp',userController.Signup)

router.get('/profile/:Name',userController.SearchByProfileName)

router.post('/password-reset',userController.PasswordReset)

module.exports=router