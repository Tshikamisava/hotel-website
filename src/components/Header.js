
import React from 'react';



function NavWrapper() {
  return (
    <div className='nav-wrapper'>
    <div className='nav-left'>
        <div className='nav-name'>Luxury Hotels.</div>
    </div>
    <div className='right'>
        <div className='nav-list'>
            <ul>
                <li ><button className='btn btn-primary'>Login or create account</button></li>
            </ul>
        </div>
    </div>
</div>
  
  );
}

export default NavWrapper;


