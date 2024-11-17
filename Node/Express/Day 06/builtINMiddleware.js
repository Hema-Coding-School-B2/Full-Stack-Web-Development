console.log("Bulit in middleware")
let express = require('express')
// console.log(express)

let app = express()
app.use(express.json())
// console.log(app)
let users = [
    {id:1,name:"Hema"},
    {id:2,name:"Mahesh"},
    {id:3,name:"TATA"}
]
app.get('/',(req,res)=>{
   
        res.send("This is express js application class")
})
app.post('/json-data',(req,res)=>{
    console.log(req.body)
   res.json(req.body)
})
let PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server is starting on http://localhost:${PORT}`)
})