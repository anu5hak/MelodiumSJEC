import './App.css';
import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom'
import BookingSel from './Components/Pages/BookingSel';
import BookingOne from './Components/Pages/BookingOne';
import BookingTwo from './Components/Pages/BookingTwo';
import BookingThree from './Components/Pages/BookingThree'
import DashboardBooking from './Components/Pages/DashboardBooking';
import AddUser from './Components/Pages/addUser';
import Login from './Components/Pages/Login'
import Reviews from './Components/Pages/Reviews'
import Pricing from './Components/Pages/Pricing'
import BookingConfirmed from './Components/Pages/BookingConfirmed';
import Media from './Components/Pages/Media'
import MediaTest from './Components/Pages/MediaTest';
import DashboardMenu from './Components/Mini/DashboardMenu';
import Analytics from './Components/Pages/Analytics';
// import DashboardMenu from './Components/Mini/DashboardMenu';
import Home from "./Components/Pages/Home";
import Navbar from './Components/Pages/Navbar';
import Pagetwo from './Components/Pages/Pagetwo';
import PageFour from './Components/Pages/Pagefour';
import Pagefive from './Components/Pages/Pagefive';
import Pagesix from './Components/Pages/Pagesix';
import Gallery from './Components/Pages/Gallery';
import PageReview from './Components/Pages/PageReview';
// import BookingDet from './Components/Pages/BookingDet';
import Contact from './Components/Pages/Contact';


function App() {
  const [hasCompletedTimeSlots, setHasCompletedTimeSlots] = useState(false);
  const [hasCompletedDetails, setHasCompletedDetails] = useState(false);
  const [hasLoggedIn,setLogin] = useState(false);

  
  const handleLogout = () => {
    setLogin(false); // Set hasLoggedIn to false on logout
  };
  return (
    <>
    <div className='App'>
        <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar/>
              <Home />
              <Pagetwo />
              <PageFour />
              <Pagefive />
              <Pagesix />
              <BookingSel />
              <Gallery />
              <PageReview />
              <Contact />
              </>
          }
        />
          <Route path="/BookingTimeSlots" element={<BookingOne setHasCompletedTimeSlots={setHasCompletedTimeSlots}/>} />
          <Route
          path="/BookingDetails"
          element={
            hasCompletedTimeSlots ? <BookingTwo/>   : <Navigate to="/BookingTimeSlots" />
          }
        />
        <Route
          path="/BookingConfirm"
          element={
            hasCompletedTimeSlots? <BookingThree /> : <Navigate to="/BookingTimeSlots" />
          }
        />
        <Route
          path="/ConfirmedBooking"
          element={
            hasCompletedTimeSlots? <BookingConfirmed /> : <Navigate to="/BookingTimeSlots" />
          }
        />
          <Route 
            path="/Dashboard/Booking" 
            element={
              hasLoggedIn?<DashboardBooking/>:<Navigate to="/Dashboard/Login"/>} 
              />
          <Route 
            path="/Dashboard/Reviews" 
            element={
            hasLoggedIn? <Reviews/>:<Navigate to="/Dashboard/Login"/>} 
          />
          <Route path="/Dashboard/Login" element={<Login setLogin = {setLogin}/>} />
          <Route 
            path="/Dashboard/Media" 
            element={
            hasLoggedIn?<Media/>:<Navigate to="/Dashboard/Login "/>} 
          />
          <Route 
            path="/Dashboard/Analytics" 
            element={
            hasLoggedIn?<Analytics/>:<Navigate to="/Dashboard/Login "/>} 
          />
          <Route path="/Dashboard" element={
            hasLoggedIn?<DashboardMenu handleLogout={handleLogout} />:<Navigate to="/Dashboard/Login"/>} />
          <Route path="/Dashboard/Mediatest" element={<MediaTest/>} />
          <Route path="/Dashboard/AddUser" element={<AddUser/>} />
          <Route path="/Dashboard/Pricing" element={<Pricing/>} />
          <Route path="/Booking" element={<BookingSel/>} />
        </Routes>
        </div>
    </>
  );
}

export default App;
