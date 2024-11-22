const collegeStudent = require('../models/collegeStudent.js')


const getCollegeStudents = async(req,res)=>{
    const  students =await collegeStudent.find()
    // res.json(student)
    res.render('index',{students})

}


const addCollegeStudent =(req,res)=>{
    console.log(req.body);
    const newStudent = new collegeStudent(req.body);
    newStudent.save();
    res.json(newStudent);
}
module.exports= {
    getCollegeStudents,
    addCollegeStudent
}