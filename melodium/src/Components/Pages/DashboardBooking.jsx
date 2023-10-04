import {useState,useEffect} from 'react'
import './DashboardBooking.css'
import { Icon } from '@iconify/react';
import DashboardMenu from '../Mini/DashboardMenu';
const API_BASE = 'http://localhost:3001'


function generateRandomBookingNumber(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let bookingNumber = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    bookingNumber += characters.charAt(randomIndex);
  }

  return bookingNumber;
}

function DashboardBooking() {
    const Times = [
        "10:00 - 11:00am",
        "11:00 - 12:00pm",
        "12:00 - 1:00pm",
        "1:00 - 2:00pm",
        "2:00 - 3:00pm",
        "3:00 - 4:00pm",
        "4:00 - 5:00pm",
        "5:00 - 6:00pm",
      ];
      const [U,setU] = useState(Times);
    const [deleteMode, setDeleteMode] = useState(false)
    const [editMode, setEditMode] = useState(null);
    const [editingBooking, setEditingBooking] = useState(null);
    const [BookingDetails, setBookingDetails] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [DashDate,setDashDate] = useState('');
    const [BlockDate,setBlockDate] = useState('');
    const [selectedTimeSlots, setSelectedTimeSlots] = useState([]);
    const [showTable, setShowTable] = useState(true);
    var d = new Date();
    var currentDate;


    useEffect(() => {
        if (selectedDate) {
            setEditMode(false)
            console.log("select")
            const dateArray = selectedDate.split('-');
            const reversedDateArray = dateArray.reverse();
            console.log("blo:"+reversedDateArray)
            reversedDateArray[1] = reversedDateArray[1].replace(/^0/, '');
            var finalDate = reversedDateArray.join('-');
            if (finalDate[0][0] == '0') {
              finalDate = finalDate.substring(1);
              
            }
            getUpcomingBookings(finalDate,'All')
        }
        else
        if(DashDate)
        {
            const dateArray = DashDate.split('-');
            const reversedDateArray = dateArray.reverse();
            console.log("blo:"+reversedDateArray)
            reversedDateArray[1] = reversedDateArray[1].replace(/^0/, '');
            var finalDate = reversedDateArray.join('-');
            if (finalDate[0][0] == '0') {
              finalDate = finalDate.substring(1);
              
            }
            const availableTimes = async () => {
                try {
                  const times = await getAvailableTimeSlots(finalDate);
                  return times;
                } catch (error) {
                  console.error("Error fetching available time slots:", error);
                  return [];
                }
              };
              
              availableTimes().then(availableTimeSlots => {
                var UniqueTimes = Times.filter(time => !availableTimeSlots.includes(time));
                setU(UniqueTimes);
                console.log("Unique Times:", UniqueTimes);
              }).catch(error => {
                console.error("Error fetching available time slots:", error);
              });
        }
        else
        if(BlockDate)
        {
            const dateArray = BlockDate.split('-');
            const reversedDateArray = dateArray.reverse();
            console.log("blo:"+reversedDateArray)
            reversedDateArray[1] = reversedDateArray[1].replace(/^0/, '');
            var finalDate = reversedDateArray.join('-');
            if (finalDate[0][0] == '0') {
              finalDate = finalDate.substring(1);
              
            }
            console.log("BlockDate:"+finalDate)
            const availableTimes = async () => {
                try {
                  const times = await getAvailableTimeSlots(finalDate);
                  return times;
                } catch (error) {
                  console.error("Error fetching available time slots:", error);
                  return [];
                }
              };
              
              availableTimes().then(availableTimeSlots => {
                var UniqueTimes = Times.filter(time => !availableTimeSlots.includes(time));
                setU(UniqueTimes);
                console.log("Unique Times:", UniqueTimes);
              }).catch(error => {
                console.error("Error fetching available time slots:", error);
              });
        }
        else
        {
            GetBookings();
        }
    }, [selectedDate,DashDate,BlockDate]);

    const handleTimeSlotClick = (timeRange) => {
        setSelectedTimeSlots(prevSelectedSlots => {
          const updatedSlots = prevSelectedSlots.includes(timeRange)
            ? prevSelectedSlots.filter(slot => slot !== timeRange)
            : [...prevSelectedSlots, timeRange];
          return updatedSlots;
        });
      };

        const addBooking = async (Data) => {
    try {
      const data = await fetch(API_BASE + '/BookingAdded', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          BookingID: Data.BookingID,
          FirstName: "Blocked Slot",
          TimeSlots: Data.TimeSlots,
          BookingDate: Data.BlockedDate,
          PaymentStatus: "Done",
        })
      }).then(res => res.json());

      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }

    const GetBookings = () => {
      setBlockDate('')
      setShowTable(true)
      setEditMode(false)
      setDeleteMode(false)
      setSelectedTimeSlots([])
        let apiEndpoint = API_BASE + '/BookingDisplay';
        fetch(apiEndpoint)
            .then(res => res.json())
            .then(data => {
                data.sort((a, b) => new Date(b.DateBooked) - new Date(a.DateBooked));
                
                setBookingDetails(data);
                console.log(data)
            })
            .catch((err) => console.error("Error: ", err));
    };

    const getUpcomingBookings = (date,Type) => {
        console.log('Upcoming Booking')
        let apiEndpoint = API_BASE + '/BookingTimeSlots/' + date +'/2/'+Type;
        
        fetch(apiEndpoint)
            .then(res => res.json())
            .then(data => {
                setBookingDetails(data);
                console.log(data.TimeSlots)
            })
            .catch((err) => console.error("Error: ", err));
      };

    const GetBookingsSearch = (fn, ln) => {
        let apiEndpoint = API_BASE + '/BookingInfo/' + fn + '/' + ln;
        fetch(apiEndpoint)
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setBookingDetails(data);
                } else {
                    setBookingDetails([]);
                }
            })
            .catch((err) => console.error("Error: ", err));
    };  
    const GetBookingsID = (bookingID) => {
        let apiEndpoint = API_BASE + '/RetrieveBookingID/' + bookingID;
        fetch(apiEndpoint)
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setBookingDetails(data);
                } else {
                    setBookingDetails([]);
                }
            })
            .catch((err) => console.error("Error: ", err));
    };  
    
    const DeleteBooking = async (BookingID) => {
        console.log("Here")
        const apiEndpoint = API_BASE + '/DeleteBooking/' + BookingID;
      
        try {
          const response = await fetch(apiEndpoint, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              // Add any other required headers here
            },
          });
      
          if (response.ok) {
            console.log('Booking deleted successfully');
            // Perform any additional actions after successful deletion
          } else {
            console.error('Failed to delete booking');
            // Handle the error case if the deletion was not successful
          }
        } catch (error) {
          console.error('An error occurred:', error);
          // Handle the error case if an exception occurred during the request
        }
        GetBookings();
      };
      const getAvailableTimeSlots = (date) => {
        let apiEndpoint = API_BASE + '/BookingTimeSlots/' + date +'/1/studio';
        
        return fetch(apiEndpoint) 
          .then(res => {
            if (!res.ok) {
              throw new Error('Network response was not ok');
            }
            return res.json();
          })
          .then(data => {
            if (data === null) {
              console.log('Date exists in collection, but no time slots available.');
              return []; // Return an empty array
            } else if (Array.isArray(data)) {
              console.log('Time slots available:', data);
              return data; // Return the array of time slots
            } else {
              console.log('Unexpected response:', data);
              return []; // Return an empty array
            }
          })
          .catch(error => {
            console.error('Error fetching time slots:', error);
            return []; // Return an empty array
          });
          
      };
    const DeleteColl = () => {
        let apiEndpoint = API_BASE + '/DeleteCollection';
      
        fetch(apiEndpoint, {
          method: 'DELETE', // Set the HTTP method to DELETE
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Error deleting collection');
          }
          return response.json();
        })
        .then(data => {
          console.log(data); // This could be a success message or any response from the server
        })
        .catch(error => {
          console.error('Error:', error);
        });
      };
      
    const BookingsToday = () =>
    {
            currentDate = d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear();
            getUpcomingBookings(currentDate,'All');
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const [firstname, lastname] = searchTerm.split(' ');
        GetBookingsSearch(firstname, lastname);
    };
    const getTypeBookings = (Type) =>
    {
        getUpcomingBookings(currentDate,Type);
    }
    const HandleDeleteBooking = (booking) =>
    {
        DeleteBooking(booking.BookingID)
    }
    const HandleEditBooking = (booking) =>
    {
        GetBookingsID(booking.BookingID)
        setEditingBooking(booking)
        setEditMode(true);
    }
    const handleSaveButton = () => {
      const dateArray = DashDate.split('-');
      const reversedDateArray = dateArray.reverse();
      reversedDateArray[1] = reversedDateArray[1].replace(0,'')
      var finalDate = reversedDateArray.join('-');
      if(finalDate[0][0]=='0')
      {
          finalDate =  finalDate.substring(1)
      }
      const updatedBookingData = {
        BookingID: editingBooking.BookingID,
        BookingDate: finalDate,
        TimeSlots: selectedTimeSlots,
      };
      console.log("Data:"+updatedBookingData.TimeSlots)
      updateBooking(updatedBookingData)
        .then(response => {
          console.log('Booking updated successfully');
          // Optionally, you can perform additional actions here after successful update
        })
        .catch(error => {
          console.error('Failed to update booking:', error);
          // Handle the error case if the update was not successful
        });
        setEditMode(false);
        GetBookings();
        GetBookings();
        // window.location.reload();
    };
    
    const updateBooking = async (data) => {
      console.log(data.bookingID)
      const apiEndpoint = API_BASE + '/UpdateBooking'; // Adjust the endpoint accordingly
      console.log(data)
      try {
          const response = await fetch(apiEndpoint, {
              method: 'PUT', // Use PUT method for updating
              headers: {
                  'Content-Type': 'application/json',
                  // Add any other required headers here
              },
              body: JSON.stringify(data), // Send updated data as JSON
          });
  
          if (response.ok) {
              return response.json(); // Return the response from the server
          } else {
              throw new Error('Failed to update booking');
          }
      } catch (error) {
          throw new Error(error.message);
      }
  };

  const handleBlockSave = async () => {
    const dateArray = BlockDate.split('-');
    
    const reversedDateArray = dateArray.reverse();
    console.log("blo:"+reversedDateArray)
    reversedDateArray[1] = reversedDateArray[1].replace(/^0/, '');
    var finalDate = reversedDateArray.join('-');
    if (finalDate[0][0] == '0') {
      finalDate = finalDate.substring(1);
      
    }

  
    const updatedBookingData = {
      BookingID: generateRandomBookingNumber(5),
      BlockedDate: finalDate,
      TimeSlots: selectedTimeSlots,
    };
  
    try {
      await addBooking(updatedBookingData);
      
      if (!BlockDate) {
        // Only update the BookingDetails array if it's not a block booking
        getUpcomingBookings(finalDate, 'All');
      }
    } catch (error) {
      console.error('Failed to save booking:', error);
    }
    setEditMode(false);
        GetBookings();
        GetBookings();

  };
  
    
  const blockBookings = () =>
  {
    setEditMode(false)
    setDeleteMode(true)
    setShowTable(false)
  }
  
  return (
    <>
        <div className="dbookingcont">
               <div className="DBookingContainer">
               {/* <button onClick={DeleteColl}>Delete</button> */}
               <DashboardMenu/>
                    <div className="UtilityBar">
                        <form onSubmit={handleFormSubmit}>
                            <input
                                type="text"
                                id="search-bar"
                                name="IDSearch"
                                placeholder='Enter Name'
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)}
                            />
                            <input type="submit" value="Search" id='search-button' />
                        </form>
                        <button className='StudioButtonD' onClick={()=>getTypeBookings("Studio")}>
                        Studio
                      </button>
                              <button className='JamRoomButtonD' onClick={()=>getTypeBookings("Jam Room")}>
                                  Jam Room
                              </button>
                      
                      <button className='BlockButton' onClick={blockBookings}>
                        Block
                      </button>
                        <div className="sorting-booking-buttons">
                            <button id="today-booking-button" onClick={BookingsToday}>Upcoming bookings</button>
                            <button id="reset-button" onClick={GetBookings}>Reset</button>
                            <input
                                type="date"
                                name="BookingDate"
                                id="BookingDateSelect"
                                placeholder='Date'
                                value={selectedDate}
                                onChange={e => setSelectedDate(e.target.value)}
                            />
                        </div>
                  </div>
                    <div className="table-scroll">
          {BookingDetails.length === 0 ? (
            <h1>No available record</h1>
          ) : (
            <div>
              
                <table>
                {showTable &&(
                  <>
                  <thead className="HeaderTitles">
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Ph. No.</th>
                      <th>Service</th>
                      <th>Timings</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Options</th>
                    </tr>
                  </thead>
                  <tbody>
                    {BookingDetails.map(booking => (
                      <tr key={booking.id}>
                        <td>{booking.BookingID}</td>
                        <td>{booking.FirstName} {booking.LastName}</td>
                        <td>{booking.EmailAddress}</td>
                        <td>{booking.ContactNumber}</td>
                        <td>{booking.TypeOfSession}</td>
                        <td>{booking.TimeSlots}</td>
                        <td>{booking.BookingDate}</td>
                        <td>{booking.PaymentStatus}</td>
                        <td>
                          <button id='edit-button' onClick={() => HandleEditBooking(booking)}>Edit</button>
                          <button id='delete-button' onClick={() => HandleDeleteBooking(booking)}>Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  </>
                )}
                </table>
              {editMode && (
                <div className="edit-div">
                  <input
                    type="date"
                    name="edit-date"
                    id="EditSelectDate"
                    placeholder="Date"
                    value={DashDate}
                    onChange={e => setDashDate(e.target.value)}
                  />
                  <div className="DashTimeSlots">
                    {U.length > 0 ? (
                      U.map((timeRange, index) => (
                        <input
                          key={index}
                          type="button"
                          className={`Slot ${selectedTimeSlots.includes(timeRange) ? 'selected' : ''}`}
                          value={timeRange}
                          onClick={() => handleTimeSlotClick(timeRange)}
                        />
                      ))
                    ) : (
                      <p>No available time slots.</p>
                    )}
                  </div>
                  <button id='save-button'  onClick={handleSaveButton}>Save</button>
                </div>
              )}
              {deleteMode && (
                <div className="edit-div">
                  <input
                    type="date"
                    name="edit-date"
                    id="EditSelectDate"
                    placeholder="Date"
                    value={BlockDate}
                    onChange={e => setBlockDate(e.target.value)}
                  />
                  <div className="DashTimeSlots">
                    {U.length > 0 ? (
                      U.map((timeRange, index) => (
                        <input
                          key={index}
                          type="button"
                          className={`Slot ${selectedTimeSlots.includes(timeRange) ? 'selected' : ''}`}
                          value={timeRange}
                          onClick={() => handleTimeSlotClick(timeRange)}
                        />
                      ))
                    ) : (
                      <p>No available time slots.</p>
                    )}
                  </div>
                  <button id='save-button' onClick={handleBlockSave}>Save</button>
                </div>
              )}
            </div>
          )}
        </div>
                </div>
                </div>
    </>
  )
}

export default DashboardBooking