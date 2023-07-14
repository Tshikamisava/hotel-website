import logo from './logo.svg';
import './App.css';


import Home from './components/Home';
import RoomDisplay from './components/Rooms';
import Login from './components/Login';
import SignUp from './components/SignUP';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GuestSelector from './components/Bookings';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route  path='/' element={<Login/>}/>
        <Route path='/login' element={<SignUp/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route  path='/home' element={<Home/>}/>
      </Routes>
     </BrowserRouter>
  
    </div>
  );
}

export default App;
