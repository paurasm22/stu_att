
const mongoose = require('mongoose');


const facSchema = new mongoose.Schema({
  Name: String,
  Email:String,
  Semester:String,
  Branch:String,
  Subject:String

});

const facModel = mongoose.model('faculty', facSchema,'faculty');

module.exports = facModel