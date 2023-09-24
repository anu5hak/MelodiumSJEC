import React, { useState } from 'react';
import './BookingThree.css';
import { Icon } from '@iconify/react';
import TimeSlots from '../Mini/TimeSlots';
import BookingStage from '../Mini/BookingStage';
import { Link, useLocation, useNavigate } from 'react-router-dom';



function generateRandomBookingNumber(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let bookingNumber = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    bookingNumber += characters.charAt(randomIndex);
  }

  return bookingNumber;
}



const API_BASE = "http://localhost:3001"

function BookingThree() {
  const location = useLocation();
  const userDetails = location.state.Details;
  const Slots = location.state.Info;
  console.log(Slots.date);

  const addBooking = async (randomBookingNumber,Payment) => {
    try {
      const data = await fetch(API_BASE + '/BookingAdded', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          BookingID: randomBookingNumber,
          FirstName: userDetails.FirstName,
          LastName: userDetails.LastName,
          ContactNumber: userDetails.PhoneNumber,
          EmailAddress: userDetails.EmailAddress,
          TimeSlots: Slots.selectedTimeSlots,
          TypeOfSession: userDetails.Service,
          PaymentStatus: Payment,
          BookingDate: Slots.date,
          BookingDay: Slots.day
        })
      }).then(res => res.json());

      console.log(data);

      // Send automated email
      const emailResponse = await fetch(API_BASE + '/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          recipientEmail: userDetails.EmailAddress,
          // You can add other email parameters here
        }),
      });

      if (emailResponse.ok) {
        console.log('Email sent successfully.');
      } else {
        console.log('Email sending failed.');
      }

    } catch (error) {
      console.error('Error:', error);
    }
  }
  const navigate = useNavigate();
  const bookingDets = () =>
  {
    
    const randomBookingNumber = generateRandomBookingNumber(8); 
    var Payment;
    if(userDetails.Service == 'Jam Room')
    {
        Payment = "Nil"
    }
    else
    {
      Payment = "Not Paid"
    }
    addBooking(randomBookingNumber,Payment)
    navigate("/ConfirmedBooking", {state : {BookingID:randomBookingNumber}})
  }

  return (
    <>
      <BookingStage stage={3} />
      <div className="DisplayContainer">
        <h1>Name:</h1>
        <h1>Contact Number:</h1>
        <h1 id="FirstName">{userDetails.FirstName} {userDetails.LastName}</h1>
        <h1>{userDetails.PhoneNumber}</h1>
        <h1>Email:</h1>
        <h1>Type of Session:</h1>
        <h1>{userDetails.EmailAddress}</h1>
        <h1>{userDetails.Service}</h1>
        <h1>Slots:</h1>
        {/* <h1>Date: </h1> */}
      </div>
      <div className="TimeSlotContainer">
        {Slots.selectedTimeSlots.map((slotValue, index) => (
          <TimeSlots key={index} SlotValue={slotValue} />
        ))}
      </div>
      <button id='ConfirmButton' onClick={bookingDets}>Confirm</button>
    </>
  );
}

export default BookingThree;
