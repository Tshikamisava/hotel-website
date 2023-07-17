import React, { useState } from 'react';
import {db} from '../config/firebase';
import {collection, addDoc} from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';



function GuestSelector() {
  const [children, setChildren] = useState(0);
  const [adult, setAdult] = useState(0);
  const [night, setNight] = useState(0);

  const navigate = useNavigate();

  const decrementChildren = () => {
    if (children > 1) {
      setChildren(children - 1);
    }
  };

  const incrementChildren = () => {
    setChildren(children + 1);
  };

  /*Adult count */

  const decrementAdult= () => {
    if (adult > 1) {
      setAdult(adult - 1);
    }
  };

  const incrementAdult = () => {
    setAdult(adult + 1);
  };

  /* night count */

  const decrementNight = () => {
    if (night > 1) {
      setNight(night - 1);
    }
  };

  const incrementNight = () => {
    setNight(night + 1);
  };

  // store reservation data on firestore//

  const add= (async()=>{

 
    try {
      const docRef = await addDoc(collection(db, "Reservation"),{
        children: children,
        adult: adult,
        night: night,
      });
      alert("Reserve sucessfully!")
      navigate('/success')
      
    } catch (error) {
      
    }

  
  })

  return (
    <div className='guest-card'>
        
        <img src="https://firebasestorage.googleapis.com/v0/b/hotel-app-61d57.appspot.com/o/Room_pics%2Froom1.jpg?alt=media&token=8aa4f01a-0daf-4bed-a3ff-07d7036f4b3c" className='room-image' />
   
        <div class="col-md-8">
<div class="card-body">
  <h5 class="card-title">The People's Brownstone</h5>
  <p class="card-text" style={{marginTop: '100px'}}> wifi .Air conditioning .kitchen .Heating .Smokers<br></br>
  .Parking .Balcony .Animal friendly</p>



   
    <div className='guest-container'>
      <p><small>Children&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</small>
      <button onClick={decrementChildren} onChange={(e)=>setChildren(e.target.value)}className='circle-button'>-</button>
      <span>{children}</span>
      <button onClick={incrementChildren} onChange={(e)=>setChildren(e.target.value)} className='circle-button'>+</button><br></br>
    </p>
    <p><small>Adult&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</small>
      <button onClick={decrementAdult} onChange={(e)=>setAdult(e.target.value)}className='circle-button'>-</button>
      <span>{adult}</span>
      <button onClick={incrementAdult} onChange={(e)=>setAdult(e.target.value)} className='circle-button'>+</button><br></br>
    </p>
    <p><small>Night&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</small>
      <button onClick={decrementNight} onChange={(e)=>setNight(e.target.value)}className='circle-button'>-</button>
      <span>{night}</span>
      <button onClick={incrementNight}  onChange={(e)=>setNight(e.target.value)} className='circle-button'>+</button><br></br>
    </p>
      <h4>R500 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <small>total</small></h4>

      <button className='submit-button' onClick={add} >RESERVE</button>
    </div>
    
  
    </div>
    </div>
    </div>

  );
};

export default GuestSelector;
