// console.log('Stream')

// const fs = require('fs')

// const readableStream = fs.createReadStream('../Day 02/newFile.txt')
// readableStream.on('data',(chunk)=>{
//     console.log(`Recieved: ${chunk}`)
// })

// readableStream.on('end',()=>{
//     console.log("Finishing reading file")
// })
// readableStream.on('error',(err)=>{
//     console.log(`This file has some error ${err}`)
// })


// const writeableStream = fs.createWriteStream('output.txt')

// writeableStream.write('Hello node\n')
// writeableStream.write('This is new class on streams\n')

// writeableStream.write('This is  streams class\n')
// writeableStream.end()


// const {Duplex} = require('stream')

// // console.log(Duplex)

// let duplexStream = new Duplex({
//     write(chunk){
//         console.log(`Writing ${chunk}`)
//     },
//     read(){
//         this.push('This is read duplex stream')
//         this.push(null)
//     }
// })

// duplexStream.write("Hello duplex stream")

// duplexStream.on('data',(chunk)=>{
//     console.log(`This read method: ${chunk}`)
// })


const {Transform} = require('stream')
// console.log(Transform)

let tranformableStream = new Transform({
    transform(chunk){
          let upperCaseChunk = chunk.toString().toUpperCase()
          this.push(upperCaseChunk)
    }
})

process.stdin.pipe(tranformableStream).pipe(process.stdout)