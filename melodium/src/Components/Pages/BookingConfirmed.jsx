import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './BookingConfirmed.css';

function BookingConfirmed() {
  // const location = useLocation();
  // const bookingID = location.state.BookingID;
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Get the .booking-confirmed-title element
    const bookingConfirmedTitle = document.querySelector('.booking-confirmed-title');

    // Get the .confirm element
    const confirmElement = document.querySelector('.confirm');

    // Check if elements are found before adding the event listener
    if (bookingConfirmedTitle && confirmElement) {
      confirmElement.addEventListener('animationend', () => {
        bookingConfirmedTitle.classList.remove('hidden');

        // Use setTimeout to trigger the fade-out effect and navigate after 3 seconds
        setTimeout(() => {
          setFadeOut(true);

          setTimeout(() => {
            navigate('/');
          }, 1000); // Navigate after the fade-out animation completes
        }, 3000); // Start the fade-out effect after 3 seconds
      });
    }

    // Cleanup the event listener when the component unmounts
    return () => {
      if (confirmElement) {
        confirmElement.removeEventListener('animationend', () => {});
      }
    };
  }, [navigate]); // Include 'navigate' in the dependency array

  return (
    <>
    <div className="BookingConfirmedContainer">
    <div className={`confirm ${fadeOut ? 'booking-confirmed-fade-out' : ''}`}>
        <svg className="confirm__progress">
          <circle className="confirm__value" cx="50%" cy="50%" r="54" />
        </svg>
        <div className="confirm__inner" />
    </div>
      <div className={`booking-confirmed-title hidden ${fadeOut ? 'booking-confirmed-fade-out' : ''}`}>
        <h1>Booking Confirmed</h1>
        <h1 id='booking-confirm-id'>Booking ID: <span>12343</span></h1>
      </div>
    </div>
    </>
  );
}

export default BookingConfirmed;
