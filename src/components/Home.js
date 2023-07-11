import React from 'react'; 
import Header from './Header';
import img1 from './images/img1.jpg';
import gym from './images/gym.jpg';
import sidebar from './images/sidebar.jpg';
import spa from './images/spa.jpg';
import swimm from './images/swimm.jpg';
import laundry from './images/laundry.jpg';
import res from './images/res.jpg';
import NavWrapper from './Header';

function Home() {
    return (
        <div>
           <NavWrapper/>
            <table>
           
                <tr>
                    
                    <td>
                        <div className='img-con'>
                            <img src={img1} className='img1' alt='img' />
                            <div className='nav-container'>
                                
                                <nav >
                                    
                                    <div className='navbar-links-container'>
                                        <a href='' className='nav-link' style={{fontSize:'25px'}}>Facilities</a>
                                        <a href='' className='nav-link' style={{fontSize:'25px'}}>Rooms</a>
                                    </div>
                                </nav>
                            </div>

                            <div className='text-container'>
                                <p style={{fontSize:'60px'}}>WELCOME TO</p>
                                <h1 style={{fontSize:'100px',fontFamily:'serif'}}>LUXURY </h1>
                                <h4 style={{fontSize:'45px',fontFamily:'serif',wordSpacing:'40px'}}>H O T E L S</h4>
                                <b style={{fontSize:'18px'}}><p>Book your stay and enjoy Luxury</p>
                                <p>redefined at the most affordable rates.</p></b>

                            </div>
                        </div>
                    </td>
                </tr>
                <tr className='App'>
                    <td>
                        <div className='facilities'>
                        <h1>FACILITIES</h1>
                        <p >We want your stay at out lush hotel to be truly unforgtable. This is why we give special attention to all of your needs so<br/>
                        &nbsp; that we can ensure an experiance quite uniquw. Luxury hotels offers the perfect setting with stunning views for leisure<br/>
                        &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; and our modern luxury resort facilities will help you enjoy the best of all. </p>
                        </div>
                    </td>
                </tr><br></br><br></br>

                <tr className='App'>
                    <td>
                        <div className='gym-container'>
                        <img src={gym}  style={{width: '1200px'}} className='gym' alt='gym' />
                        <div className='text'>
                        <h1 style={{fontSize:'80px',fontFamily:'serif'}}>THE GYM</h1>
                        
                        </div>
                        </div>
                    </td>
                </tr><br></br><br></br>
                <tr className='App'>
                    <td>
                        <div className='gym-container'>
                        <img src={sidebar} style={{width: '1200px'}} className='sidebar' alt='sidebar' />

                        <div className='text'>
                        <h1 style={{fontSize:'80px',fontFamily:'serif'}}>POOLSIDE BAR</h1>
                        
                        </div>
                        </div>
                    </td>
                </tr><br></br><br></br>

               <tr className='App'>
                    <td>
                        <div className='gym-container'>
                        <img src={spa} style={{width: '1200px'}} className='spa' alt='spa' />

                        <div className='text'>
                        <h1 style={{fontSize:'80px',fontFamily:'serif'}}>THE SPA</h1>
                        
                        </div>
                        </div>
                    </td>
                </tr><br></br><br></br>

               <tr className='App'>
                    <td>
                        <div className='gym-container'>
                        <img src={swimm} style={{width: '1200px'}} className='swimm' alt='swimm' />
                        <div className='text'>
                        <h1 style={{fontSize:'60px',fontFamily:'serif'}}>SWIMMING POOL</h1>
                        
                        </div>
                        </div>
                    </td>
                </tr><br></br><br></br><br></br>

                <tr className='App'>
                    <td>
                        <div className='gym-container'>
                        <img src={res} style={{width: '1200px'}} className='res' alt='res' />

                        <div className='text'>
                        <h1 style={{fontSize:'80px',fontFamily:'serif'}}>POOLSIDE BAR</h1>
                        
                        </div>
                        </div>
                    </td>
                </tr><br></br><br></br>

                <tr className='App'>
                    <td>
                        <div className='gym-container'>
                        <img src={laundry} style={{width: '1200px'}} className='laundry' alt='laundry' />

                        <div className='text'>
                        <h1 style={{fontSize:'80px',fontFamily:'serif'}}>LAUNDRY</h1>
                        
                        </div>
                        </div>
                    </td>
                </tr>


            </table>
        </div>
    );
};


export default Home;
