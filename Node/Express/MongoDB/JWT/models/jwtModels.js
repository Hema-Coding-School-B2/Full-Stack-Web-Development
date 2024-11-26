

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/myDataBase').then(()=>console.log('JWT Data base is Strarted'))

const jwtUserSchema = new mongoose.Schema({
    name:{type:String,required:true},
    password:{type:String,required:true},
    role:{type:String,required:true,enum:['user','owner']},
    // image:{type:String}
    image:[{type:String}]

})

const jwtUser = mongoose.model('jwttokenuser',jwtUserSchema)

const newJwtUser = new jwtUser({
    name:'Hema',
    password:'hema123',
    role:'owner'
})
// newJwtUser.save()
console.log(jwtUser)
module.exports = jwtUser