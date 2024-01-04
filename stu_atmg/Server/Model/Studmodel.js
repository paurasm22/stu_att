
const mongoose = require('mongoose');


const studSchema = new mongoose.Schema({
  Name: String,
  Email:String,
  Rollno:Number,
  Semester:String,
  Branch:String

});

const stuModel = mongoose.model('student', studSchema);

module.exports = stuModel