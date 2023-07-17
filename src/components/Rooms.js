import React, { useState} from 'react';
import room2 from './images/room2.jpg';
import room1 from './images/room1.jpg';
//import RatingStars from './Rating';
import RatingStars from 'react-rating-stars-component';
import { FaHeart } from 'react-icons/fa';
import {Link, useNavigate} from 'react-router-dom';



function RoomDisplay() {
  const navigate = useNavigate();

    return (
        <div>
            <table>
                <tr>
                    <td>
                        <div className='img-con'>
                            <img src={room2} className='img1' alt='img' />
                            <div className='nav-container'>
                                <nav >
                                    <div className='navbar-links-container'>
                                        <a href='/home' className='nav-link' style={{fontSize:'25px'}}>Facilities</a>
                                        <a href='' className='nav-link' style={{fontSize:'25px'}}>Rooms</a>
                                    </div>
                                </nav>
                            </div>

                            <div className='text-container'>
                                <p style={{fontSize:'70px'}}>WELCOME TO</p>
                                <h1 style={{fontSize:'120px',fontFamily:'serif'}}>LUXURY </h1>
                                <h4 style={{fontSize:'50px',fontFamily:'serif',wordSpacing:'40px'}}>H O T E L S</h4>
                                <b style={{fontSize:'18px'}}><p>Book your stay and enjoy Luxury</p>
                                <p>redefined at the most affordable rates.</p></b>

                            </div>
                        </div>
                    </td>
                </tr>
                <tr className='App'>
                    <td>
                        <div className='rooms'>
                        <h1>ROOMS AND RATES</h1>
                        <p >Each of our bright, light-flooded rooms come with everything you could possibly need for confortable stay.<br/>
                        &nbsp; And yes, confort isn't our only objective, we also value good design, sleek contemporary furnishing complemented<br/>
                        &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; by the rich tones of natures's palatte as visible from our room's sea-view windows and terraces. </p>
                        </div>
                    </td>
                </tr>
            </table>

    <div className='room-card'>

        
      <img src="https://firebasestorage.googleapis.com/v0/b/hotel-app-61d57.appspot.com/o/Room_pics%2FRoom.jpg?alt=media&token=377aecfe-9e25-4760-b637-f182014110ca" className='room-image' />
    

      <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">The People's Brownstone</h5>
        <p class="card-text" style={{marginTop: '100px'}}> wifi .Air conditioning .kitchen .Heating .Smokers<br></br>
        .Parking .Balcony .Animal friendly</p>

        <button className='submit-button' onClick={() => navigate('/bookings')}>BOOK</button>
      
        <p class="card-text" ><small class="text-muted" style={{display: 'inline-flex'}}>
       4.0 <RatingStars
        count={5}
        value={4}
        size={24}
        activeColor="blue"
        emptyStarColor="#bde0fe"
        edit={false}
      /> (7 Reviews)
        </small></p>

        
        
      </div>

      <div className='FaHeart'>
        <FaHeart/>

      </div>

      
      <div className='price'>
        <p>
        <h3>R500  &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<small> /night</small></h3>
        </p>
      </div>
    </div>
     






    <div className='room-card'>

        
<img src="https://firebasestorage.googleapis.com/v0/b/hotel-app-61d57.appspot.com/o/Room_pics%2Froom1.jpg?alt=media&token=8aa4f01a-0daf-4bed-a3ff-07d7036f4b3c" className='room-image' />


<div class="col-md-8">
<div class="card-body">
  <h5 class="card-title">The People's Brownstone</h5>
  <p class="card-text" style={{marginTop: '100px'}}> wifi .Air conditioning .kitchen .Heating .Smokers<br></br>
  .Parking .Balcony .Animal friendly</p>

  <button className='submit-button' onClick={() => navigate('/bookings')} >BOOK</button>

  <p class="card-text" ><small class="text-muted" style={{display: 'inline-flex'}}>
 4.0 <RatingStars
  count={5}
  value={4}
  size={24}
  activeColor="blue"
  emptyStarColor="#bde0fe"
  edit={false}
/> (7 Reviews)
  </small></p>

  
  
</div>

<div className='FaHeart'>
  <FaHeart/>

</div>


<div className='price'>
  <p>
  <h3>R500  &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<small> /night</small></h3>
  </p>
</div>
</div>

</div>
    </div>

    
        </div>
    );
};

export default RoomDisplay;
