import React,{useState} from "react";
import homeimg from './Images/homeimg.jpg'
import "./Home.css"
const Home = () => {
    let HandleClick = (type) => {

        let scrollToPosition = 0;
          if (type === "Booking") {
            // Calculate the pixel value equivalent to 310vh
            scrollToPosition = (window.innerHeight * 682) / 100;
          }
        console.log(scrollToPosition)
        window.scrollTo({
          top: scrollToPosition,
          behavior: 'auto',
        });
      }
      const [scrolling, setScrolling] = useState(false);
    return (
        <>
        <div className="homeconatiner">
            <div className="background-image"></div>

            <div className="rectangle1"></div>
            <div className="rectangle"></div>
            <div className="rectangle2"></div>
            <div className="herotext">
                <h1>THOUGHTS, <span>IDEAS AND ART!</span></h1>
            </div>
            <div className="buttoncontainer">
            <button id="book-now-button" onClick={()=>HandleClick("Booking")}>
                    BOOK NOW!
                </button>
            </div>

            <div className="sjecstudio">
                <h1>THE SJEC STUDIO</h1>
            </div>

         </div>
        </>
    );
}

export default Home;