const express = require('express')
const router = express()
router.use(express.json())
// const collegeStudent = require('../models/collegeStudent.js')

const {getCollegeStudents,addCollegeStudent}=require('../controllers/collegeStudentController.js')

router.get('/',getCollegeStudents)

router.post('/post',addCollegeStudent)

module.exports = router;