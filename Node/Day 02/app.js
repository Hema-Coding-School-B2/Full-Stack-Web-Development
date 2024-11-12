// Export File

let studentData= ()=>{
    return "Welcome to Node js Classes"
}

// console.log(studentData())

let student = {
    name:'Hema',
    age:10,
    id:1
}

// module.exports = studentData

// module.exports = student

module.exports ={
    studentData,
    student
}