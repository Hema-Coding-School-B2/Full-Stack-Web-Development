// let fs = require('fs')
// // console.log(fs)

// fs.writeFile("newFile.txt","This is new nodejs document class",()=>{
//     console.log("File has created successfully")
// })

// fs.readFile('newFile.txt','utf8',(err,data)=>{
//     console.log(data)
// })

// fs.unlink('newFile.txt',()=>{
//     console.log("This file has deleted")
// })


// let path = require('path')
// // console.log(path)

// let filePath = path.join('folder','subfolder','file.txt')
// // console.log(filePath)
// // console.log(path.extname(filePath))

// // if(path.extname(filePath) === '.txt'){
// //     console.log("This is txt format")
// // }

// let parsedData = path.parse(filePath)

// console.log(parsedData.name)


// let readline = require('readline')

// // console.log(readline)

// let rl = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout

// })

// rl.question("What is your name ? ",(ans)=>{
//     console.log(`Welcome ${ans} !`)
//     rl.close()
// })

// rl.on('line',(input)=>{
//     console.log(`Entered data ${input}`)
// })


let http = require('http')
// console.log(http)

let server = http.createServer((req, res)=>{
    // console.log(res)
    res.writeHead(200,{'Content-type':'text/plain'})
    res.end("Welcome to Hema coding school")
})
let PORT = 3000;
let HOSTNAME = '127.0.0.12'
server.listen(PORT,()=>{
    console.log(`Server has started http://${HOSTNAME}:${PORT}`)
})