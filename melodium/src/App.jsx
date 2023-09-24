import './App.css';
import React, { useRef, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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
  // Create a ref for the "Facilities" component
  

  return (
    <>
        <div className='App'>
          <Navbar />
          <Home />
          <Pagetwo />
          <PageFour />
          <Pagefive />
          <Pagesix />
          <Gallery /> 
          <PageReview />
          <Contact />
        </div>
    </>
  );
}


export default App;
