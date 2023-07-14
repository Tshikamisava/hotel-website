import React, { useState } from 'react';

function GuestSelector() {
  const [guestCount, setGuestCount] = useState(0);
  const [guestAdult, setAdultCount] = useState(0);
  const [guestNight, setNightCount] = useState(0);

  const decrementGuestCount = () => {
    if (guestCount > 1) {
      setGuestCount(guestCount - 1);
    }
  };

  const incrementGuestCount = () => {
    setGuestCount(guestCount + 1);
  };

  /*Adult count */

  const decrementAdultCount = () => {
    if (guestAdult > 1) {
      setAdultCount(guestAdult - 1);
    }
  };

  const incrementAdultCount = () => {
    setGuestCount(guestAdult + 1);
  };

  /* night count */

  const decrementNightCount = () => {
    if (guestAdult > 1) {
      setNightCount(guestNight - 1);
    }
  };

  const incrementNightCount = () => {
    setNightCount(guestNight + 1);
  };


  return (
    <div className='guest-card'>
        
        <img src="https://firebasestorage.googleapis.com/v0/b/hotel-app-61d57.appspot.com/o/Room_pics%2Froom1.jpg?alt=media&token=8aa4f01a-0daf-4bed-a3ff-07d7036f4b3c" className='room-image' />
   
        <div class="col-md-8">
<div class="card-body">
  <h5 class="card-title">The People's Brownstone</h5>
  <p class="card-text" style={{marginTop: '100px'}}> wifi .Air conditioning .kitchen .Heating .Smokers<br></br>
  .Parking .Balcony .Animal friendly</p>



   
    <div className='guest-container'>
      <p><small>Children</small>
      <button onClick={decrementGuestCount}>-</button>
      <span>{guestCount}</span>
      <button onClick={incrementGuestCount}>+</button><br></br>
    </p>
    <p><small>Adult</small>
      <button onClick={decrementAdultCount}>-</button>
      <span>{guestAdult}</span>
      <button onClick={incrementAdultCount}>+</button><br></br>
    </p>
    <p><small>Night</small>
      <button onClick={decrementNightCount}>-</button>
      <span>{guestNight}</span>
      <button onClick={incrementNightCount}>+</button><br></br>
    </p>
      <h4>R500 <small>total</small></h4>

      <button className='submit-button' >RESERVE</button>
    </div>
    
  
    </div>
    </div>
    </div>

  );
};

export default GuestSelector;
