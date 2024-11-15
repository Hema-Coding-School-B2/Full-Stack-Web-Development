
console.log("Express App")

let express = require('express')
// console.log(express)

let app = express()

// console.log(app)

app.get('/',(req,res)=>{
        // console.log(req)
        // console.log(res)

        res.send("This is express js application class")
})

app.post('/submit',(req,res)=>{
    res.send("This data is submitted")
})
app.put('/update',(req,res)=>{
    res.send('This is updated')
})

app.delete('/delete',(req,res)=>{
    res.send('This is deleted')

})

let PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server is starting on http://localhost:${PORT}`)
})