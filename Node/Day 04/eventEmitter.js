// console.log("Event Emitter")

const event = require('events')
// console.log(event)

let eventEmitter = new event()

// eventEmitter.on('greet',(name)=>{
//     console.log(`Hello ${name}`)
// })
// eventEmitter.emit('greet','Mahesh')
// eventEmitter.emit('greet','Hema')
// eventEmitter.emit('greet','TATA')

const fs = require('fs')

// eventEmitter.on("fileRead",(fileData)=>{
//     console.log(`File Data : ${fileData}`)
// })

// fs.readFile('../Day 02/newFile.txt','utf8',(err,data)=>{
//     console.log(data)
//     eventEmitter.emit("fileRead",data)
// })

// eventEmitter.once('login',(userName)=>{
//     console.log(`welcome ${userName}`)
// })
// eventEmitter.emit('login',"Hema")
// eventEmitter.emit('login',"Hema2")

// function greetListener(listenerName){
//     console.log(`Good Morning ${listenerName}`)
// }

// eventEmitter.on('greeting',greetListener)

// eventEmitter.emit('greeting',"TATA")

// eventEmitter.emit('greeting',"TATA1")
// eventEmitter.removeListener('greeting',greetListener)


function greetListener1(listenerName){
    console.log(`Good Morning1 ${listenerName}`)
}

function greetListener2(listenerName){
    console.log(`Good Morning2 ${listenerName}`)
}

eventEmitter.on('greets',greetListener1)
eventEmitter.on('greets',greetListener2)


eventEmitter.emit('greets',"HCS")
eventEmitter.emit('greets',"HCS2")

eventEmitter.removeAllListeners('greets')
