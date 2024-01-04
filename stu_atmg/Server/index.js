const express = require('express')
const server = express()
const cors = require('cors')
const mongoose = require('mongoose');
const facModel=require('./Model/Facmodel')
const stuModel=require("./Model/Studmodel")
server.use(cors())
server.use(express.json())

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('');
  console.log("Connected to atlas")

}



server.post('/faculty',  (req, res) => {
  try {
       const data =  req.body;
    console.log("Data is received", data);
    facModel.create(data)
    res.json(data);
  } catch (error) {
    console.error("Error", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

//Post for student 
server.post('/student',  (req, res) => {
  try {
       const data =  req.body;
    console.log("Data is received", data);
    stuModel.create(data)
    // Process or save the data as needed
    res.json(data);
  } catch (error) {
    console.error("Error", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});










server.listen('3001',()=>{
  console.log("Server Started")
})
