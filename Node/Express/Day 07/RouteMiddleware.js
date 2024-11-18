const express = require('express')

const app = express()

const orders =[
    {id:1, item:'Lap',quantity:1},
    {id:2, item:'Desk',quantity:2}

]
function checkAuthQuery(req,res,next){
    console.log(req.query)
    const authKey = req.query.auth
    if(authKey === "mySecureData"){
        console.log("This is check key")
        next()
    }else{
        res.send(`Please check auth key value`)
    }
}

// app.use(checkAuthQuery)
app.get('/orders',checkAuthQuery,(req,res)=>{
    // res.send(`This is route middleware`)

    res.json(orders)
})

app.post('/orders/post',checkAuthQuery,(req,res)=>{
    res.send('This is post')
})
const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server is starting on http://localhost:${PORT}`)
})