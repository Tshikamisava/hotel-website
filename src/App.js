import logo from './logo.svg';
import './App.css';


import Home from './components/Home';
import RoomDisplay from './components/Rooms';
import Login from './components/Login';
import SignUp from './components/SignUP';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GuestSelector from './components/Bookings';
import Reserved from './components/Success';



function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Login/>}/>
        <Route  path='/home' element={<Home/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route  path='/bookings' element={<GuestSelector/>}/>
        <Route  path='/rooms' element={<RoomDisplay/>}/>
        <Route path='/success' element={<Reserved/>}/>
        
      </Routes>
     </BrowserRouter>
  
    </div>
  );
}

export default App;
