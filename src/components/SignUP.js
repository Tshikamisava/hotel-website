import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import img2 from './images/img2.jpg';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const register = (()=>{
    createUserWithEmailAndPassword(auth, email, password).then(()=>{
      alert("Registered successfully")
      navigate('/')
    }).catch((error)=>{
      console.log(error.message);
    })
  })


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='signup-card'>

<div className='signup'>
        <p className="heading">Sign up</p>
        <p>Register to access your account</p>

        <div className="input-container">
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="input-container">
          <label>Email</label>
          <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
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

        <button className='submit-button' onClick={register} style={{ marginLeft: '65px'}}>SIGN UP</button>
        <p style={{ marginLeft: '80px'}}>Already have an account: <a style={{color: 'red'}} href="/login">LOGIN</a></p>
        
      <img src={img2} className='aside-image1' />
    
     
    </div>
  );
}

export default SignUp;
