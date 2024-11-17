const express = require('express')
const app = express()
// console.log(app)


function myMiddleware(req,res,next){
        console.log("This is middleware call",req.name = "Mahesh")
        req.name = "Mahesh"
    console.log("This is fisrt request of middleware function", new Date().toLocaleTimeString())
    next()
}
app.use(myMiddleware)

let terminalInput = '';
process.stdin.setEncoding('utf8')
process.stdin.on('data',(data)=>{
        console.log("Entered name is ",data.trim())
        terminalInput = data.trim()
})

app.get('/',(req,res)=>{
console.log("This is get request call",req.name)

console.log('This is get terminal data',terminalInput)
if(req.name === terminalInput){
    res.send('This is middleware class')
}
else{
    res.send('Data has mismatched')
}
})

const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server is starting on http://localhost:${PORT}`)
})