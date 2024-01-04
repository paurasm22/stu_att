import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './Components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Faculty from './Components/Faculty'
import Student from './Components/Student'
import styled from 'styled-components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Container>

   
    <div className="sidebar">
    <Sidebar/>
    </div>
     <div className="content">
     <Routes>
        <Route path='/faculty' element={<Faculty/>} />
        <Route path='/student' element={<Student/>}/>

    </Routes>
     </div>
     </Container>

  
    </>
  )
}

export default App

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`