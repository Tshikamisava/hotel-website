import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../config/firebase';
import { Link, useNavigate } from 'react-router-dom';

import img2 from './images/img2.jpg';

function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();



  const Login = (()=>{
    signInWithEmailAndPassword(auth, email, password).then(()=>{
      alert("Login successfully")
      navigate('/home');
    }).catch((error)=>{
      console.log(error.message);
    })
  })

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='login-card'>

<div className='login'>
        <p className="heading">Log in</p>
        <p>Login to access your account</p>

        <div className="input-container">
          <label>Email</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        </div>

        <div className='input-container' style={{ marginLeft: '65px'}}>
          <label>Password</label>
          <div className='password-input-container'>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? 'text' : 'password'} 
            />
            <i
              className={`password-toggle-icon ${showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'}`}
              onClick={togglePasswordVisibility}
            ></i>

          </div>
        </div>

    <div className='input-container'>
        <label style={{display: 'flex'}}>
            <input type="checkbox" className='rememberme' />
               Remember me&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p><a href="forgotpassword" style={{color: 'red', textDecoration: 'none'}} >forgot password</a></p><br></br>
        </label>

    </div>

        <button className='submit-button' style={{ marginLeft: '65px'}} onClick={Login}>LOGIN</button>
        <p style={{ marginLeft: '80px'}}>Dont have an account: <a style={{color: 'red', textDecoration: 'none'}} href="/signup">SIGNUP</a></p>
        
      <img src={img2} className='aside-image' />
    
     
    </div>
  );
}

export default Login;
