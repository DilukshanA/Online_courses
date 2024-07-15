import React from 'react'
import './CSS/LoginSignup.css'
import programmer from '../Components/Assets/programmer.png';
import logo_black from '../Components/Assets/logo_black.png';


const LoginSignup = () => {
  return (
    <div onClick={window.scrollTo(0,0)} className='loginsignup'>
      <div className="loginsignup-container">

        <div className="loginsignup-container-left">
          <img src={programmer} alt=''/>
        </div>

        <div className="loginsignup-container-right">
          <img src={logo_black} alt=''/>
          <h1>Sign Up</h1>

          <div className="loginsignup-fields">
            <input type="text" placeholder='Your Name'/>
            <input type="email" placeholder='Email Address'/>
            <input type="password" placeholder='Password'/>
          </div>
          <button>Continue</button>
          <p className='loginsignup-login'>Already have an account? <span>Login here</span></p>
          <div className="loginsignup-agree">
            <input type='checkbox' name='' id=''/>
            <p>By continuing, i agree to the term of  use & privacy policy.</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default LoginSignup