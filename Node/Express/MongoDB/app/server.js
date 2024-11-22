const express = require('express');
const app = express();
const router = require('./routes/collegeStudentRoute.js')
const connectStudentData = require('./config/connections.js')
connectStudentData('mongodb://localhost:27017/myDataBase')

app.set('view engine','ejs')
app.set('views','../app/views')
app.use('/college-students',router)
const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server is starting on http://localhost:${PORT}`)
})