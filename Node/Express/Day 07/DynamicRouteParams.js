const express = require('express')

const app = express()


// app.get('/users/:id',(req,res)=>{
//     console.log(req.params)
//     res.send(`This is dynamic routing params component`)
// })


// app.get('/users/:id/phone/:phonenumber',(req,res)=>{
//     console.log(req.params)
//         const {id,phonenumber} = req.params
//     res.send(`This is dynamic routing params component users is ${id} and phone number is ${phonenumber}`)
// })

app.get('/search',(req,res)=>{
    console.log(req.query)
    const {name, age, address} = req.query

    res.send(`This is dynamic routing string component student name is ${name}, age is ${age} and address is ${address} `)
})
const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server is starting on http://localhost:${PORT}`)
})