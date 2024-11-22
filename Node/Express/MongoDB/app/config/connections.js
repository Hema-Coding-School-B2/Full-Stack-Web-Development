const mongoose= require('mongoose');

function connectStudentData(url){

    mongoose.connect(url).then(res=>console.log("MongoDB has connected"))
}

module.exports = connectStudentData;