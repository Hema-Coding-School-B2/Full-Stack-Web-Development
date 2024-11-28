

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/myDataBase').then(()=>console.log('JWT Data base is Strarted'))

const indexUserSchema = new mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number,required:true},
    role:{type:String,required:true,enum:['user','owner']},
    gender:{type:String,required:true,enum:['Female','Male']},


})

const indexUser = mongoose.model('indexdata',indexUserSchema)

// const newJwtUser = new jwtUser({
//     name:'Hema',
//     password:'hema123',
//     role:'owner'
// })
// newJwtUser.save()
// console.log(jwtUser)
module.exports = indexUser