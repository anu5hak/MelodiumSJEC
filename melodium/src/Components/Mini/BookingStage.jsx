import React from 'react'
import './BookingStage.css'


export const BookingStage = ({stage}) => {
  

  return (
    <>
      <div className='Numbering'>
        <h1>1</h1>
        <div className='Line1'></div>
        <h1 className={stage === 2 || stage === 3 ? 'StageText' : ''}>2</h1>
        <div className='Line2'></div>
        <h1 className={stage === 3 ? 'StageText' : ''}>3</h1>
      </div>
      <div className='Titles'>
        <h1>Select time slots</h1>
        <h1>Enter Details</h1>
        <h1>Confirm Booking</h1>
      </div>
    </>
  );
};

export default BookingStage;