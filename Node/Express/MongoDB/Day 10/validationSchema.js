
const mongoose= require('mongoose');
const validator = require('validator');
const express = require('express');
const app = express();
app.use(express.json())
mongoose.connect('mongodb://localhost:27017/myDataBase').then(res=>console.log("MongoDB has connected"))

const studentDataScheme=new mongoose.Schema({
    name:{type:String,
         required:[true,"Name is required"],
        //  lowercase:true,
        // uppercase:true,
            trim:true,
            minLength:[3,"Name must be at least 3 letter"]
        },
    age:{type:Number,
        required:[true,"Age is required"],
        min:[18,"Age must be at least 18 years"],
        max:[60,"Age must be at below 60 years"]

    },
    major:{type:String,
        required:[true,"major is required"],
        enum:{
            values:['React', 'Node','Express','MongoDB'],
            message:'Major must be have selected elements'
        }
    },
    gpa:{type:String,
        required:[true,"gpa is required"],
        validate(value){
            if(value>0){
                console.log(`Value is ${value}`)
            }else{
                throw new Error("GPA must be positive number")
            }
        }
    },
    email:{type:String,
        required:[true,"gpa is required"],
        validate(value){
            if(validator.isEmail(value)){
                console.log(`Mail has valid`)
            }else{
                throw new Error(`Please enter valid mail address`)
            }
        }
    }
})

const studentData = mongoose.model('collegeStudentDataValidation',studentDataScheme)

const collegeStudent = new studentData({
    name:'Kri',
    age:58,
    major:'Express',
    gpa:5,
    email:'radha@gmail.com'
})
// collegeStudent.save()
console.log(collegeStudent)

function validateData(req,res,next){
        console.log(req.body)
        const {name, age, major, gpa, email} = req.body

        if(name.length<3){
            return res.json({error:'Name must be at least 3 letter'})
        }
        if(!validator.isEmail(email)){
                return res.json({error:'Please enter valid mail address'})
        }
        next()

}
app.post('/student',validateData,(req,res)=>{
    console.log(req.body)
    const newCollegeStudent = new studentData(req.body);
    newCollegeStudent.save()
    res.json(req.body)
})
const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server is starting on http://localhost:${PORT}`)
})