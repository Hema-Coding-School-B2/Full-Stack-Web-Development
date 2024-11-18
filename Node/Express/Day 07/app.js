const express = require('express')

const app = express()

const userRoute = require('./routes/users.js')
console.log(userRoute,"This is user")
app.use('/appusers',userRoute)
app.get('/app',(req,res)=>{
    res.send(`This  is app component`)
})

const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server is starting on http://localhost:${PORT}`)
})