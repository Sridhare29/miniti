import React from 'react'
import './Css/Signup.css'
    
function Signup() {
  return (
    <div className='signup'>
        <div className="signup-container">
            <h1>Sign Up</h1>
            <div className='signup-fields'>
                <input type='text' placeholder='Your Name' />
                <input type='email' placeholder='Email Address'/>
                <input type='password' placeholder='Password'/>
            </div>
            <button className='sign-btn'>Continue</button>
            <p className='signup-login'>Already have an account? <span>Login here</span></p>
            <div className="signup-agree">
                <input type='checkbox' name='' id=''/>
                <p>By Continuing, i agree to the terms of use & privarcy policy</p>
            </div>
        </div>
    </div>
  )
}

export default Signup