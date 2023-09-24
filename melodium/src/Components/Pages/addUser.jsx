import React from 'react'
import './addUser.css'
import ControlRoomImage from '../../Images/ControlRoomBookingImg.JPG';
import MelodiumLogo from '../../Images/MelodiumLogo.png'
const API_BASE = 'http://localhost:3001'

function Login() {

  const addUser = async (username, password) => {
    try {
      const data = await fetch(API_BASE + '/UserAdded', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          userid: username,
          pass: password
        })
      }).then(res => res.json());
  
      console.log(data);
      if (data.message) {
        // User was added successfully
        console.log(data.message);
      } else if (data.error) {
        // User already exists or another error occurred
        console.error(data.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Access the form elements by name
    const username = e.target.elements['enter-username'].value;
    const password = e.target.elements['enter-password'].value;
    const confirmPassword = e.target.elements['confirm-password'].value;

    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);

    if(password===confirmPassword)
    {
      addUser(username, password);
    }
    else
    { 
      console.log("Password not equal")
    }
    // Now you can call the addUser function with the values
  };

  return (
    <>
      <div className="add-user-background">
        <img id='bgIMG' src={ControlRoomImage} alt="" />
        <div className="adding-user-rectangle">
          <img id='MelodiumLogo' src={MelodiumLogo} alt="" />
          <h1 id='login-text'>LOGIN</h1>
          <form onSubmit={handleFormSubmit}>
            <label id='username' htmlFor="enter-username">Username:</label>
            <input type="text" name="enter-username" placeholder='Username' id='enter-username' required/>
            <label id='password' htmlFor="enter-password">Password:</label>
            <input type="password" name="enter-password" placeholder='Password' id='enter-password' required/>
            <label id='confirm-password-label' htmlFor="confirm-password">Confirm Password:</label>
            <input type="password" name="confirm-password" placeholder='Confirm Password' id='confirm-password' />
            <input type="submit" value="Submit" className='login-user-container' required/>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login