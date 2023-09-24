import React from 'react'
import './Login.css'
import ControlRoomImage from '../../Images/ControlRoomBookingImg.JPG';
import MelodiumLogo from '../../Images/MelodiumLogo.png'
import {Link, Routes, Route, useNavigate, Navigate, useLocation} from 'react-router-dom';
const API_BASE = 'http://localhost:3001'

function Login({setLogin}) {

  const navigate = useNavigate();
  const GetBookings = (id) => {
    console.log(id)
      let apiEndpoint = API_BASE + '/CheckUser/'+id;
      fetch(apiEndpoint)
          .then(res => res.json())
          .then(data => {
              console.log(data)
              navigate("/Dashboard/Booking")
              setLogin(true)
          })
          .catch((err) => console.error("Error: ", err));
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Access the form elements by name
    const username = e.target.elements['enter-username'].value;
    const password = e.target.elements['enter-password'].value;

    console.log('Username:', username);
    console.log('Password:', password);

    
      GetBookings(username, password);
    // Now you can call the addUser function with the values
  };

  return (
    <>
      <div className="login-background">
        <img id='loginBG' src={ControlRoomImage} alt="" />
        <div className="login-rectangle">
          <img id='MelodiumLogo' src={MelodiumLogo} alt="" />
          <h1 id='login-text'>LOGIN</h1>
          <form onSubmit={handleFormSubmit}>
            <label id='login-username' htmlFor="enter-username">Username:</label>
            <input type="text" name="enter-username" placeholder='Username' id='login-enter-username' required/>
            <label id='login-password' htmlFor="enter-password">Password:</label>
            <input type="password" name="enter-password" placeholder='Password' id='login-enter-password' required/>
            <input type="submit" value="Login" className='login-submit-container' required/>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login