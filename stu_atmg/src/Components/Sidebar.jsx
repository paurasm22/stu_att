import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const [selectedtab,setSelectedtab]=useState(false);
  const handleclick=(tab)=>{
    setSelectedtab(tab);
    console.log(`${tab} is clicked`)
    
  }
  const isTabActive = (tab) => tab === selectedtab ? 'active' : '';

  return (
    <div class="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style={{width: "280px", height:"100vh"}}>
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <svg class="bi pe-none me-2" width="40" height="32"></svg>
      <span class="fs-4"><img src="https://imgs.search.brave.com/lCTjV4V_wiDJmxJpLsLWPjEqbInzKOfofJLItLtMgog/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zaWVz/Z3N0LmVkdS5pbi9p/bWFnZXMvc2llc19n/c3RfbG9nby5qcGc" alt="" style={{height:'60px',    height: '88px',
    width: '190px',
    display: 'flex',
    justifyContent:' center',
    alignItems: 'center',
    paddingRight: '8px'}} /></span>
    </a>
    <hr/>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a  onClick={()=>{
          handleclick("dashboard")
        }} style={{color:'black'}} href="#" class={`nav-link  ${isTabActive('dashboard')}`} aria-current="page">
          <svg class="bi pe-none me-2" width="16" height="16"></svg>
          Dashboard
        </a>
      </li>
      <li>
        <Link   onClick={()=>{
          handleclick("faculty")
        }}to="/faculty" href="#" class={`nav-link link-body-emphasis ${isTabActive('faculty')}`}>
          <svg class="bi pe-none me-2" width="16" height="16"></svg>
          Faculty
        </Link>
      </li>
      <li>
        <Link   onClick={()=>{
          handleclick("student")
        }}to="/student" href="#" class={`nav-link link-body-emphasis ${isTabActive('student')}`}>
          <svg class="bi pe-none me-2" width="16" height="16"></svg>
          Student
        </Link>
      </li>
      <li>
        <a  onClick={()=>{
          handleclick("report")
        }} href="#" class={`nav-link link-body-emphasis ${isTabActive('report')} `}>
          <svg class="bi pe-none me-2" width="16" height="16"></svg>
          Report
        </a>
      </li>
      <li>
        <a onClick={()=>{
          handleclick("pending")
        }} href="#" class={`nav-link link-body-emphasis ${isTabActive('pending')}`}>
          <svg class="bi pe-none me-2" width="16" height="16"></svg>
          Pending
        </a>
      </li>
      <li>
        <a onClick={()=>{
          handleclick("verified")
        }}  href="#" class={`nav-link link-body-emphasis ${isTabActive('verified')}`}>
          <svg class="bi pe-none me-2" width="16" height="16"></svg>
          Verified
        </a>
      </li>
      <li>
        <a  onClick={handleclick} href="#" class="nav-link link-body-emphasis">
          <svg class="bi pe-none me-2" width="16" height="16"></svg>
          Log Out
        </a>
      </li>
    </ul>
    <hr/>
    
  </div>
  )
}

export default Sidebar