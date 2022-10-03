const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name: {type:String,required: true},
    gpa: {type:String,required: true},
    isPassing: Boolean
})
// the Outline for ALL students we create/populate in dataset

const Student = mongoose.model("Student", studentSchema)

module.exports = Student