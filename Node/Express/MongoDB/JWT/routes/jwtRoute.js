const express = require('express')
const jwtRouter = express()
jwtRouter.use(express.json())
const {getRegisterData,getLoginData,getDashboardData,authenticateToken} = require('../controllers/jwtController.js')
jwtRouter.post('/register',getRegisterData)

jwtRouter.post('/login',getLoginData)


jwtRouter.get('/dashboard',authenticateToken,getDashboardData)
module.exports = jwtRouter;