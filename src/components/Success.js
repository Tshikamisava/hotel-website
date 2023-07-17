import { useNavigate } from 'react-router-dom';


function Reserved (){
    const navigate = useNavigate();
    return(
        <div className="success">

            <i class="bi bi-check2-circle"></i>
            <h3 style={{marginBottom:'10px'}}>Reservation Successfull</h3>
            <h5 style={{marginBottom:'20px'}}>Your Room has been Reserved</h5>

            <button className='submit-button' onClick={() => navigate('/home')}>BACK HOME</button>
        </div>
    )
}
export default Reserved;