const express = require('express')
const app =  express()
const cors = require('cors')
app.use(cors())
const router = require('./routes/jwtRoute.js')


app.use('/jwt',router)
const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server is starting on http://localhost:${PORT}`)
})