import axios from 'axios'
import React, { useState } from 'react'
import styled from 'styled-components'

const Student = () => {
  const [value,setValue]=useState()
  const [studata,setStudata]=useState({
    Name:"",
    Email:"",
    Rollno:"",
    Semester:"",
    Branch:""
  })
  const handleinput=(event)=>{
    setStudata({...studata,[event.target.name] : event.target.value})

  }
  const handleSubmit=async(event)=>{
    event.preventDefault();
    console.log(studata)
     await axios.post('http://localhost:3001/student',studata)
    .then((response)=>{
      console.log(response)
    })
    .catch((error)=>{
      console.log(error)
    })
    setValue("")

  }


  return (

    <Container>
      <Formcontainer>
        <form action="">
        <h1>Add a Student</h1>
        <input type="text" placeholder='Name' name='Name' onChange={handleinput} value={value} />
        <input type="text" placeholder='Email' name='Email' onChange={handleinput} value={value}/>
        <input type="text" placeholder='Rollno' name='Rollno'onChange={handleinput} value={value} />
        <input type="text" placeholder='Semester' name='Semester' onChange={handleinput} value={value}/>
        <input type="text" placeholder='Branch' name='Branch' onChange={handleinput} value={value}/>
        <Submitbtn onClick={handleSubmit}>Submit</Submitbtn>


        </form>

      </Formcontainer>

    </Container>
  )
}

export default Student

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100vw - 300px);
  height: 100vh;
`
const Formcontainer = styled.div`
 display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin: auto; */
form{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;

}  
input{
  height: 50px;
  width: 300px;
  border: 1px grey solid;
  padding-left: 15px;
  margin-bottom: 10px;
}

`

const Submitbtn = styled.button`
  width:300px ;
  height: 50px;
  border-radius: 10px;
  background-color: #7209b9;
  color: white;

`