import React from 'react'
import BookingStage from '../Mini/BookingStage'
import BookingOne from './BookingOne'
import BookingTwo from './BookingTwo'
import BookingThree from './BookingThree'

import './BookingDet.css'




function BookingDet() {
  return (
    <>
       <BookingStage stage={3}/>
       <BookingThree/>
    </>
  )
}

export default BookingDet;