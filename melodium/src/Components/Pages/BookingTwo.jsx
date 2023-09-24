import React,{useState,useEffect} from 'react'
import './BookingTwo.css'
import { Icon } from '@iconify/react';
import BookingStage from '../Mini/BookingStage';
import { Link, useLocation,useNavigate } from 'react-router-dom';

function BookingTwo() {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const navigate = useNavigate();
    const [UserDetails,setUserDetails] = useState(
      {
        FirstName: "",
        LastName: "",
        EmailAddress: "",
        PhoneNumber: "",
        Service: ""
    });
    const location = useLocation();
    const Type = location.state.Type

    useEffect(() => {
      if(Type==='Jam Room')
        setUserDetails({...UserDetails, Service : "Jam Room"})
      else
        setUserDetails({...UserDetails, Service : "Audio Recording"})
    }, []);


    const toggleDropdown = () => {
      setDropdownVisible(!isDropdownVisible);
  };

  const handleFormSubmit = (e) =>
  {
    e.preventDefault();
    // handleCompletedDetails()
    navigate("/BookingConfirm" , {state : {Details:UserDetails , Info:location.state.DateAndTime}})
  }
  const handleInput = (event) =>
  {
    const name = event.target.name;
    const value = event.target.value;
    setUserDetails({...UserDetails, [name] : value})
  }
  const handleServiceTypeInput = (e) =>
  {
    const value = e.target.value
    setUserDetails({...UserDetails, Service : value})
  }
  return (
    <>
      <BookingStage stage={2}/>
        <div className="FormContainerOne">
            <form onSubmit={handleFormSubmit}>
            <h1>Name</h1>
            <input type="text" name="FirstName" id="FirstName" placeholder='First Name' value={UserDetails.firstname} onChange={handleInput} required/>
            <input type="text" name="LastName" id="LastName"  placeholder='Last Name' value={UserDetails.lasttname} onChange={handleInput}required/>
            <h1>Contact Email Address</h1>
            <h1>Contact Number</h1>
            <input type="email" name="EmailAddress" id="EmailAddress" placeholder='EmailAddress' value={UserDetails.emailaddress} onChange={handleInput} required/>
            <input
              type="text"
              name="PhoneNumber"
              id="PhoneNumber"
              placeholder="Phone Number"
              value={UserDetails.phonenumber}
              onChange={handleInput}
              pattern="[0-9]{10}"
              title="Please enter a 10-digit number."
              required
            />
            <h1>Type of session</h1>
            <div className={`dropdown ${isDropdownVisible ? 'show' : ''}`} required>
            <select name="TOS" id="TOS" onChange={handleServiceTypeInput}>
                  {Type === 'Jam Room' ? (
                    <>
                      <option value="" disabled>Select type of session</option>
                      <option value="Jam Room">Jam Room</option>
                    </>
                  ) : (
                      <>
                          <option value="" disabled>Select type of session</option>
                          <option value="Audio Recording">Audio Recording</option>
                          <option value="Music Production">Music Production</option>
                          <option value="Session Artist">Session Artist</option>
                          <option value="Video Recording">Video Recording</option>
                          <option value="Mixing and Mastering">Mixing and Mastering</option>
                      </>
                  )}
              </select>
            <Icon
          icon="simple-line-icons:arrow-up"
          rotate={2}
          id='icon'
          onClick={toggleDropdown}
        />
          </div>
          <input type="submit" id='Submit' value="Proceed" />
        </form>
        
        </div>
    </>
  )
}

export default BookingTwo