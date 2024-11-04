'use client'
import React, { useState } from 'react'
import './signin.css'
import axios from 'axios'
import { useRouter } from 'next/navigation'
function Signin() {
  const[record,setRecord]=useState('')
  const router=useRouter()
  async function handleSubmit(e)
  {
    e.preventDefault()
    console.log(record)
    const url="http://localhost:9000/user/login"
    const response= await axios.post(url,record)
    console.log(response.data)
    if(response.data.status==1)
    {
      sessionStorage.setItem('token',response.data.token)
      sessionStorage.setItem('userid',response.data.data._id)
      router.push('/home')
    }
  }

  const handleChange=(e)=>
    {
      e.preventDefault()
      const{name,value}=e.target
      setRecord((prev)=>({...prev,[name]:value}))
    }

  return (
    <div className="background-image">
    <div className="card">
        <img src="/assets/img/cross-ash.svg" alt="Close" className="close-icon"/> 
        <h2 className="heading">Sign In</h2>
        <div className="input-feild-wrapper">

            <p className="in-name">Email or Phone Number</p>
            <input type="text" placeholder="" className="input-field" name='email' onChange={handleChange}/>
            <p className="in-name">Password</p>
            <div className="password-field">
                <input type="password" placeholder="" className="input-field" name='password' onChange={handleChange}/>
                <img src="/assets/img/eye.svg" alt="Show Password" className="eye-icon"/>
            </div>
       <button className="sign-up-button" onClick={handleSubmit}>Sign In</button>
            <p className="sign-in-text">Dont't have an Account? <a href="/" className="sign-in-link">Sign Up</a></p>
        </div>

    </div>
</div>
  )
}

export default Signin
