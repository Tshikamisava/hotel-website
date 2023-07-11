import React from 'react';
import room2 from './images/room2.jpg';

function RoomDisplay() {
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
                                        <a href='' className='nav-link' style={{fontSize:'25px'}}>Facilities</a>
                                        <a href='' className='nav-link' style={{fontSize:'25px'}}>Rooms</a>
                                    </div>
                                </nav>
                            </div>

                            <div className='text-container'>
                                <p style={{fontSize:'70px'}}>WELCOM TO</p>
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

            
        </div>
    );
};

export default RoomDisplay;
