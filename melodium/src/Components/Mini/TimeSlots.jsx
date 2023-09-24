import React, { useState } from 'react'
import '../Mini/TimeSlots.css'

export const TimeSlots = ({ SlotValue }) => {
  return (
    <>
      <div
        className="Slot"
      >
        {SlotValue}
      </div>
    </>
  );
};

export default TimeSlots;
