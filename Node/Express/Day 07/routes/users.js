

const express =require('express')
const users = express()


users.get('/user',(req,res)=>{
    res.send(`This is user component`)
})

module.exports = users