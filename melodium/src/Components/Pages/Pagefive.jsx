import React,{useEffect, useState} from "react";
import "./Pagefive.css"

import fac1 from './Images/fac1.png'
import fac2 from './Images/fac2.png'
import fac3 from './Images/fac3.png'
import fac4 from './Images/fac4.png'
import fac5 from './Images/fac5.png'

function Pagefive(){
    const [inView1, setInView1] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
    const fht = document.querySelector(".facilityhero").getBoundingClientRect();
    const fac5 = document.querySelector(".fac5").getBoundingClientRect();
    const fac4 = document.querySelector(".fac4").getBoundingClientRect();
    const fac3 = document.querySelector(".fac3").getBoundingClientRect();
    const fac2 = document.querySelector(".fac2").getBoundingClientRect();
    const fac1 = document.querySelector(".fac1").getBoundingClientRect();

    if (!inView1 && (fht.top <= window.innerHeight && fht.bottom >= 0)) {
            setInView1(true);
    }
    if (!inView1 && (fac5.top <= window.innerHeight && fac5.bottom >= 0)) {
        setInView1(true);
    }
    if (!inView1 && (fac4.top <= window.innerHeight && fac4.bottom >= 0)) {
        setInView1(true);
    }
    if (!inView1 && (fac3.top <= window.innerHeight && fac3.bottom >= 0)) {
        setInView1(true);
    }
    if (!inView1 && (fac2.top <= window.innerHeight && fac2.bottom >= 0)) {
        setInView1(true);
    }
    if (!inView1 && (fac1.top <= window.innerHeight && fac1.bottom >= 0)) {
        setInView1(true);
    }
    };
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [inView1]);

    const [isActive, setIsActive] = useState(false);
    const [isH1Displayed, setIsH1Displayed] = useState(false); // New state variable
    const [isActive2, setIsActive2] = useState(false);
    const [isH1Displayed2, setIsH1Displayed2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);
    const [isH1Displayed3, setIsH1Displayed3] = useState(false);
    const [isActive4, setIsActive4] = useState(false);
    const [isH1Displayed4, setIsH1Displayed4] = useState(false);
    const [isActive5, setIsActive5] = useState(false);
    const [isH1Displayed5, setIsH1Displayed5] = useState(false);
  
    const CardInfo = (facility) => {
      setTimeout(() => {
        if(facility==='facility1')
        {
            setIsActive(true);
            setIsH1Displayed(!isH1Displayed);
        }
        else
        if(facility==='facility2')
        {
            setIsActive2(true);
            setIsH1Displayed2(!isH1Displayed2);
        }
        if(facility==='facility3')
        {
            setIsActive3(true);
            setIsH1Displayed3(!isH1Displayed3);
        }
        if(facility==='facility4')
        {
            setIsActive4(true);
            setIsH1Displayed4(!isH1Displayed3);
        }
        if(facility==='facility5')
        {
            setIsActive5(true);
            setIsH1Displayed5(!isH1Displayed3);
        } // Toggle the state variable
      }, 100);
    }
  
    const handleMouseLeave = () => {
      setIsActive(false);
      setIsH1Displayed(false); // Reset the state variable when leaving
      setIsActive2(false);
      setIsH1Displayed2(false);
      setIsActive3(false);
      setIsH1Displayed3(false);
      setIsActive4(false);
      setIsH1Displayed4(false);
      setIsActive5(false);
      setIsH1Displayed5(false);
    }

    return (
        <>
        <div className="pagefivecontainer">
            <div className="facilitycircle">
            </div>
               <div className={`facilityherotext ${inView1 ? "animate" : ""}`}>
                < h1 className="facilityhero" >

                        Fuel creativity in our cutting-edge studio facilities
                    </h1>
                </div>
                <div className="facilitysubcontainer">
                    <div className="facilitysub">
                        <h1 className="facilitysubtext">Dive into a world of possibilities with our premium studio facilities, meticulously designed to enhance every aspect of your creative process</h1>
                    </div>
                </div>
                <div className="all5images"> 


                <div
                        className={`fac1container  ${isActive ? 'active' : ''}`}
                        onClick={()=>CardInfo('facility1')}
                        onMouseLeave={handleMouseLeave}
                        >
                    <h1>Control Room</h1>
                    <h3 className={`fac1subtext ${isH1Displayed ? 'displayed' : ''}`}> 
                    Step into our state-of-the-art audio room, boasting impeccable acoustics crafted by India's leading experts. It's where audio mixing and mastering reach their peak performance.                   
                    </h3>
                    <img src={fac1} className={`fac1 ${inView1 ? "animate" : ""}`}  />
                    </div>


                    <div
                        className={`fac2container  ${isActive2 ? 'active2' : ''}`}
                        onClick={()=>CardInfo('facility2')}
                        onMouseLeave={handleMouseLeave}
                        >
                        <h1>Jam Room</h1>
                        <h3 className={`fac2subtext ${isH1Displayed2 ? 'displayed2' : ''}`}>Experience the ultimate soundproofed and climate-controlled rehearsal space, tailor-made for bands to perfect their music, ensuring every note is on point before hitting the recording studio or taking the stage.
 </h3>
                        <img src={fac2} className={`fac2 ${inView1 ? "animate" : ""}`}  />
                    </div>

                    <div className={`fac3container  ${isActive3 ? 'active3' : ''}`}
                        onClick={()=>CardInfo('facility3')}
                        onMouseLeave={handleMouseLeave}
                        >
                        <h1>Recording Room A</h1>
                        <h3 className={`fac3subtext ${isH1Displayed3 ? 'displayed3' : ''}`}>
                        This room is optimized for recording vocals and acoustic instruments, offering superior sound quality for capturing drums, choirs, and symphonies. Comprehensive acoustic treatment extends to the ceiling to eliminate standing waves and enhance audio clarity.
                        </h3>
                        <img src={fac3} className={`fac3 ${inView1 ? "animate" : ""}`} />
                    </div>


                    <div className={`fac4container  ${isActive4 ? 'active4' : ''}`}
                        onClick={()=>CardInfo('facility4')}
                        onMouseLeave={handleMouseLeave}
                        >
                        <h1>Equipment</h1>
                        <h3 className={`fac4subtext ${isH1Displayed4 ? 'displayed4' : ''}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h3>
                        <img src={fac4} className={`fac4 ${inView1 ? "animate" : ""}`}/>
                    </div>

                    <div className={`fac5container  ${isActive5 ? 'active5' : ''}`}
                        onClick={()=>CardInfo('facility5')}
                        onMouseLeave={handleMouseLeave}
                        >
                        <h1>Lounge </h1>
                        <h3 className={`fac5subtext ${isH1Displayed5 ? 'displayed5' : ''}`}>Exciting lounge coming soon! </h3>
                        <img src={fac5} className={`fac5 ${inView1 ? "animate" : ""}`} />
                    </div>


                </div>
               
        </div>
       
        
        </>
    );
}
export default Pagefive;
