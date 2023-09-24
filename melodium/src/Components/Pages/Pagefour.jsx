import React,{useEffect, useState} from "react";
import pagefourbg from './Images/pagefourbg.png'
import "./Pagefour.css"
import studio1 from './Images/studio1.png'
import studio2 from './Images/studio2.png'
import studio3 from './Images/studio3.png'
import studio4 from './Images/studio4.png'
import studio5 from './Images/studio5.png'
import studio6 from './Images/studio6.png'
import studio7 from './Images/studio7.png'
import studio8 from './Images/studio8.png'
import studio9 from './Images/studio9.png'
import studio11 from './Images/studio11.png'

function Pagefour(){
    const [inView1, setInView1] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const st1 = document.querySelector(".studiorow1").getBoundingClientRect();
        const st2 = document.querySelector(".studiorow2").getBoundingClientRect();
        const st3 = document.querySelector(".studiorow3").getBoundingClientRect();
        const st4 = document.querySelector(".studiorow4").getBoundingClientRect();
        const st5 = document.querySelector(".studiorow5").getBoundingClientRect();
        const st6 = document.querySelector(".studiorow6").getBoundingClientRect();
        const st7 = document.querySelector(".studiorow6").getBoundingClientRect();
        const st8 = document.querySelector(".studiorow6").getBoundingClientRect();
        const st9 = document.querySelector(".studiorow6").getBoundingClientRect();
  
        if (!inView1 && (st1.top <= window.innerHeight && st1.bottom >= 0)) {
            setInView1(true);
          }
          if (!inView1 && (st2.top <= window.innerHeight && st2.bottom >= 0)) {
            setInView1(true);
          }
          if (!inView1 && (st3.top <= window.innerHeight && st3.bottom >= 0)) {
            setInView1(true);
          }
          if (!inView1 && (st4.top <= window.innerHeight && st4.bottom >= 0)) {
            setInView1(true);
          }
          if (!inView1 && (st5.top <= window.innerHeight && st5.bottom >= 0)) {
            setInView1(true);
          }
          if (!inView1 && (st6.top <= window.innerHeight && st6.bottom >= 0)) {
            setInView1(true);
          }
          if (!inView1 && (st7.top <= window.innerHeight && st7.bottom >= 0)) {
            setInView1(true);
          }
          if (!inView1 && (st8.top <= window.innerHeight && st8.bottom >= 0)) {
            setInView1(true);
          }
          if (!inView1 && (st9.top <= window.innerHeight && st9.bottom >= 0)) {
            setInView1(true);
          }


      };
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [inView1]);

    return (
        <>
        <div className="pagefourcontainer">
            <div className="imgcontainer">
                <img className="pagefourbg" src={pagefourbg} /> 
            </div>
            <h1 className="titlestudio">THE STUDIO⚡</h1>
                <div  className={`studiorow1 ${inView1 ? "animate" : ""}`}>
                    <img src={studio1} />
                    <div className="recordingstudio">
                        <h1>Recording Room</h1>
                    </div>
                </div>

                <div className={`studiorow2 ${inView1 ? "animate" : ""}`}>
                    <img src={studio5} />
                    <div className="pencilmike">
                        <h1>Neumann's KM 184 Stereo Pair</h1>
                    </div>
                    
                </div>

                <div className={`studiorow3 ${inView1 ? "animate" : ""}`}>
                    <img src={studio3} />
                    <div className="mixertext">
                    <h1>Qsc Touch Mix Pro</h1>
                    </div>
                </div>

                <div className={`studiorow4 ${inView1 ? "animate" : ""}`}>
                    <img src={studio2} />
                    <div className="samemike">
                        <h1>SHURE Beta 58A Pair</h1>
                    </div>
                </div>

                <div className={`studiorow5 ${inView1 ? "animate" : ""}`}>
                    <img src={studio2} />
                </div>

                <div className={`studiorow6 ${inView1 ? "animate" : ""}`}>
                    <img src={studio8} />
                    <div className="liveroomtext">
                        <h1>Control Room</h1>
                    </div>
                </div>

                <div className={`studiorow7 ${inView1 ? "animate" : ""}`}>
                     <img src={studio6} />
                    <div className="allmikes">
                        <h1>Mics</h1>
                    </div>
                </div>

                 <div className={`studiorow8 ${inView1 ? "animate" : ""}`}>
                     <img src={studio9} />
                     <div className="loungeroom">
                        <h1>Lounge Room</h1>
                    </div>
                 </div> 

                <div className={`studiorow9 ${inView1 ? "animate" : ""}`}>
                     <img src={studio1} />
                </div>  
                
                
                
            </div>                      
         
        </>
    );
}
export default Pagefour;