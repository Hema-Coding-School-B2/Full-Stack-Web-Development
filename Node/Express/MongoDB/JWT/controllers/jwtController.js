const jwtUser = require('../models/jwtModels.js')
const indexUser = require('../models/indexModel.js')

const jwt = require('jsonwebtoken')
const SECRET_Key = 'jwt-sign'
const getRegisterData = (req,res)=>{
    console.log(req.body)
    console.log(req.file)
    const {name,password,role} = req.body;
    // const imagePath = req.file ? req.file.path :'nule';
    const imagePath = req.files.map(file=>file.path)
    const newJwtUser = new jwtUser({name,password,role,image:imagePath})
        newJwtUser.save()
    res.json(newJwtUser)
} 
const getIndexData = (req,res)=>{
    console.log(req.body)
    console.log(req.file)
    const {name,age,role,gender} = req.body;
   
    const newIndexUser = new indexUser({name,age,role,gender})
    newIndexUser.save()
    res.json(newIndexUser)
}   
const getLoginData = async (req,res)=>{
    console.log(req.body)
    const {name,password} = req.body;
        const checkUser = await jwtUser.findOne({name,password})
        console.log(checkUser)
        if(!checkUser){
            return res.json({message:'Invalid Credintials'})
        }
   const token =  jwt.sign({name,password},SECRET_Key,{expiresIn:'1hr'})
   console.log(token)
   res.json(token)

}
const authenticateToken = (req,res,next)=>{
      const token =  req.headers['authorization']
      console.log(token)
      const decode = jwt.verify(token,SECRET_Key)
      console.log(decode)
      req.body = decode
      next()
}

const getDashboardData = async(req,res)=>{
    console.log(req.body)
    // const getUser = jwtUser.find({'name':})
        const getUser = await jwtUser.find({'name':req.body.name})
        console.log(getUser)
    res.json({getUser})
}
module.exports = {
    getRegisterData,getLoginData,getDashboardData,authenticateToken,getIndexData
}