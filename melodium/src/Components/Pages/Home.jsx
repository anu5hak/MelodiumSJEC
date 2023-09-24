import React from "react";
import homeimg from './Images/homeimg.jpg'
import "./Home.css"
const Home = () => {
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
            <button>
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