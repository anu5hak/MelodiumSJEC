import React,{useState} from 'react'
import './BookingTwo.css'
import { Icon } from '@iconify/react';

function BookingTwo() {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
      setDropdownVisible(!isDropdownVisible);

  };
  return (
    <>
        <div className="FormContainerOne">
            <form action="">
            <h1>Name</h1>
            <input type="text" name="FirstName" id="FirstName" placeholder='First Name'/>
            <input type="text" name="LastName" id="LastName" placeholder='Last Name'/>
            <h1>Contact Email Address</h1>
            <h1>Contact Number</h1>
            <input type="text" name="EmailAddress" id="EmailAddress" placeholder='EmailAddress'/>
            <input type="text" name="PhoneNumber" id="PhoneNumber" placeholder='Phone Number'/>
            <h1>Type of session</h1>
            <div className={`dropdown ${isDropdownVisible ? 'show' : ''}`}>
            <select name="TOS" id="TOS">
              <option value="Audio Recording">Audio Recording</option>
              <option value="Music Production">Music Production</option>
              <option value="Session Artist">Session Artist</option>
              <option value="Video Recording">Video Recording</option>
              <option value="MixingMastering">Mixing and Mastering</option>
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