const express = require('express')
const jwtRouter = express()
jwtRouter.use(express.json())

const multer = require('multer')
// const upload = multer()
// jwtRouter.use(upload.none())
const path = require('path')
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"uploads/")
    },
    filename:function(req,file,cb){
        let ext = path.extname(file.originalname)
        cb(null,Date.now() + ext)
    }
})
const upload = multer({
    storage:storage,
    fileFilter:function(req,file,cb){
        console.log(file)
        if(file.mimetype==="image/png"){
            cb(null,true)
        }

    }
})


const {getRegisterData,getLoginData,getDashboardData,authenticateToken,getIndexData} = require('../controllers/jwtController.js')
// jwtRouter.post('/register',upload.single('image'),getRegisterData)
jwtRouter.post('/register',upload.array('image',5),getRegisterData)


jwtRouter.post('/login',getLoginData)
jwtRouter.post('/index',getIndexData)



jwtRouter.get('/dashboard',authenticateToken,getDashboardData)
module.exports = jwtRouter;