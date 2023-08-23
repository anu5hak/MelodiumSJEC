import React from 'react';
import './BookingSel.css';
import ControlRoomImageBook from '../../Images/ControlRoomBookingImg.JPG';
import MicImageBook from '../../Images/BookingMic.JPG';
import GridDots from '../../SVG/Grid.svg'
import Star from '../../SVG/Star.svg'
import { Icon } from '@iconify/react';
import MelodiumLogo from '../../Images/MelodiumLogo.png'

function BookingSel() {
  return (
    <>
      <div className="BookingImagesContainer">
        <img id="BookingControlR" src={ControlRoomImageBook} alt="Control Room Booking" />
        <img id="BookingMic" src={MicImageBook} alt="Booking Mic" />
      </div>
      <div className="Grids">
          <img id='GridDots' src={GridDots} alt="" />
      </div>
      <div className="StarContainer">
          <img id='Star' src={Star} alt="" />
      </div>
      <div className="BookingTextContainer">
        <h1>Unlock Your Creativity: <a>Reserve Your Studio Space Today!</a></h1>
        <p>Secure your spot effortlessly through our streamlined studio booking page 
            – your gateway to hassle-free reservations, available time slots, and a 
            seamless creative experience.
        </p>
        <div className="BookingButtonContainer">
          <button className='JamRoomButton'>
            Jam Room
            <Icon id='Guitar' icon="emojione:guitar" />
          </button>
          <button className='StudioButton'>
            Studio
            <Icon id='Microphone' icon="noto-v1:studio-microphone" />
          </button>
        </div>
      </div>
      <div className="LogoContainer">
        <img id='MelodiumLogo' src={MelodiumLogo} alt="" />
      </div>
    </>
  );
}

export default BookingSel;
