import React, { useState } from 'react';
import './BookingOne.css'
import TimeSlots from '../Mini/TimeSlots';

function getDate() {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var dates = [];

  for (let i = 0; i < 7; i++) {
      var d = new Date();
      d.setDate(d.getDate() + i);
      var month = d.toLocaleString('default', { month: 'long' });
      var year = d.getFullYear();
      var date = d.getDate();
      var day = daysOfWeek[d.getDay()];
      var MonthShort = month.substr(0, 3);
      if(d.getDay()!=0)
        dates.push({ month, year, date, MonthShort, day });
  }
  return dates;
}
function BookingOne() {
  const weekDates = getDate();
  const [clickedIndex, setClickedIndex] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedMon, setSelectedMon] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);


  const handleClick = (index) => {
    setClickedIndex(index);
    setSelectedDate(weekDates[index].date);
    setSelectedMon(weekDates[index].month);
    setSelectedYear(weekDates[index].year);
  };
  return (
    <>
      <h1 className='MMYY'>{weekDates[0].month} {weekDates[0].year}</h1>
      <div className='FDates'>
        <div className='DatesS'>
            {weekDates.map((dayInfo, index) => (
               <div
               key={index}
               className={index === clickedIndex ? 'SDayDate' : 'DayDate'}
               onClick={() => handleClick(index)}
             >
                <h1 className='Day'>{dayInfo.day}</h1>
                <h1 className='Date'>{dayInfo.MonthShort} {dayInfo.date}</h1>
              </div>
            ))}
        </div>
      </div>
      <div className='Header'>
        <h1 className='SelDate'>
        <svg className='Calendar' xmlns="http://www.w3.org/2000/svg">
          <path d="M25.95 7.4H23.25V5.7C23.25 5.24913 23.1078 4.81673 22.8546 4.49792C22.6014 4.17911 22.258 4 21.9 4C21.542 4 21.1986 4.17911 20.9454 4.49792C20.6922 4.81673 20.55 5.24913 20.55 5.7V7.4H12.45V5.7C12.45 5.24913 12.3078 4.81673 12.0546 4.49792C11.8014 4.17911 11.458 4 11.1 4C10.742 4 10.3986 4.17911 10.1454 4.49792C9.89223 4.81673 9.75 5.24913 9.75 5.7V7.4H7.05C5.97587 7.4 4.94574 7.93732 4.18622 8.89376C3.4267 9.85019 3 11.1474 3 12.5V32.9C3 34.2526 3.4267 35.5498 4.18622 36.5062C4.94574 37.4627 5.97587 38 7.05 38H25.95C27.0241 38 28.0543 37.4627 28.8138 36.5062C29.5733 35.5498 30 34.2526 30 32.9V12.5C30 11.1474 29.5733 9.85019 28.8138 8.89376C28.0543 7.93732 27.0241 7.4 25.95 7.4ZM27.3 32.9C27.3 33.3509 27.1578 33.7833 26.9046 34.1021C26.6514 34.4209 26.308 34.6 25.95 34.6H7.05C6.69196 34.6 6.34858 34.4209 6.09541 34.1021C5.84223 33.7833 5.7 33.3509 5.7 32.9V21H27.3V32.9ZM27.3 17.6H5.7V12.5C5.7 12.0491 5.84223 11.6167 6.09541 11.2979C6.34858 10.9791 6.69196 10.8 7.05 10.8H9.75V12.5C9.75 12.9509 9.89223 13.3833 10.1454 13.7021C10.3986 14.0209 10.742 14.2 11.1 14.2C11.458 14.2 11.8014 14.0209 12.0546 13.7021C12.3078 13.3833 12.45 12.9509 12.45 12.5V10.8H20.55V12.5C20.55 12.9509 20.6922 13.3833 20.9454 13.7021C21.1986 14.0209 21.542 14.2 21.9 14.2C22.258 14.2 22.6014 14.0209 22.8546 13.7021C23.1078 13.3833 23.25 12.9509 23.25 12.5V10.8H25.95C26.308 10.8 26.6514 10.9791 26.9046 11.2979C27.1578 11.6167 27.3 12.0491 27.3 12.5V17.6Z" fill="white"/>
        </svg>
          {selectedDate} {selectedMon} {selectedYear}
        </h1>
      </div>
      <div className='DispTimeSlots'>
        <TimeSlots/>
        <TimeSlots/>
        <TimeSlots/>
        <TimeSlots/>
        <TimeSlots/>
        <TimeSlots/>
        <TimeSlots/>
        <TimeSlots/>
      </div>
      <div className='ProButton'>
        <h1>Proceed</h1>
      </div>
    </>
  );
}


export default BookingOne