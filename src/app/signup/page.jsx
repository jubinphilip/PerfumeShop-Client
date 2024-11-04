'use client'
import React, { useState } from 'react'
import './signup.css'
import Link from 'next/link'
import axios from 'axios'
function SignUp() {
  const[record,setRecord]=useState()

  async function handleSubmit(e)
  {
    e.preventDefault()
    console.log(record)
    const url="http://localhost:9000/user/register"
    const response= axios.post(url,record)

  }
  const handleChange=(e)=>
  {
    e.preventDefault()
    const{name,value}=e.target
    setRecord((prev)=>({...prev,[name]:value}))
  }
  return (
    <div className='body'>
    <div className="background-image">
    <div className="card">
        <img src="/assets/img/cross-ash.svg" alt="Close" className="close-icon"/> 
        <h2 className="heading">Sign Up</h2>
        <div className="input-feild-wrapper">
            <p className="in-name">Name</p>
            <input type="text" placeholder="" className="input-field" name='name' onChange={handleChange}/>

            <p className="in-name">Email or Phone Number</p>
            <input type="text" placeholder="" className="input-field" name='email' onChange={handleChange}/>
            <p className="in-name">Password</p>
            <div className="password-field">
                <input type="password" placeholder="" className="input-field" name='password' onChange={handleChange}/>
                <img src="/assets/img/eye.svg" alt="Show Password" className="eye-icon"/>
            </div>
   
            <button className="sign-up-button" onClick={handleSubmit}>Sign Up</button>
            <p className="sign-in-text">Already have an account? <Link href="/signin"
                    className="sign-in-link">Sign In</Link></p>
        </div>

    </div>
    </div>
</div>
  )
}

export default SignUp
