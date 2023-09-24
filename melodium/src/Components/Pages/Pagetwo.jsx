import React,{useEffect, useState} from "react";
import pagetwo from './Images/pagetwo.png'
import mike2 from './Images/mike2.png'
import pagethree from './Images/pagethree.png'
import "./Pagetwo.css"
function Pagetwo (){
    const [inView1, setInView1] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const rect1 = document.querySelector(".rectangle3").getBoundingClientRect();
        const hero2 = document.querySelector(".herotext2").getBoundingClientRect();
        const page2img = document.querySelector(".pagetwoimg").getBoundingClientRect();
        const rect4 = document.querySelector(".rect4").getBoundingClientRect();
        // const page3img = document.querySelector(".pagethreeimg").getBoundingClientRect();
  
        if (!inView1 && (rect1.top <= window.innerHeight && rect1.bottom >= 0)) {
            setInView1(true);
          }
          if (!inView1 && (hero2.top <= window.innerHeight && hero2.bottom >= 0)) {
            setInView1(true);
          }
          if (!inView1 && (page2img.top <= window.innerHeight && page2img.bottom >= 0)) {
            setInView1(true);
          }
          if (!inView1 && (rect4.top <= window.innerHeight && rect4.bottom >= 0)) {
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
        <div className="pagetwocontainer">

        <div className={`rectangle3 ${inView1 ? "animate" : ""}`}></div>

        <h1 className={`herotext2 ${inView1 ? "animate" : ""}`}>A <span>State of the Art</span> studio right here in <span>Mangalore</span></h1>
        
        <h1 className="subtext2">
             Welcome to our world-class studio, nestled in the heart of Mangalore. Our cutting-edge facility is thoughtfully designed to cater to a wide spectrum of creative and professional needs, making it the ultimate destination for artists, musicians, filmmakers, content creators, and more.
         </h1>

        <div className="circle2">
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200" fill="none">
        <g filter="url(#filter0_b_282_11)">
            <circle cx="100" cy="100" r="100" fill="#F5BC25" fill-opacity="0.5"/>
        </g>
        <defs>
            <filter id="filter0_b_282_11" x="-10" y="-10" width="220" height="220" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="5"/>
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_282_11"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_282_11" result="shape"/>
            </filter>
        </defs>
        </svg>
        </div>
        
        <div className="pagetwoimagecontainer">
            <img className={`pagetwoimg ${inView1 ? "animate" : ""}`} src={pagetwo} />
        </div>
        
        <div className="rectangle32"></div>
        <div className="circle23">
        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="38" viewBox="0 0 37 38" fill="none">
        <g filter="url(#filter0_b_576_7)">
            <ellipse cx="18.5" cy="19" rx="18.5" ry="19" fill="#F5BC25"/>
        </g>
        <defs>
            <filter id="filter0_b_576_7" x="-10" y="-10" width="57" height="58" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="5"/>
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_576_7"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_576_7" result="shape"/>
            </filter>
        </defs>
        </svg>
        </div>
        <div className="rectangle33"></div>
        <div className="record1"></div>
        <div className="record2"></div>

        <div className="mikeimagecontainer">
            <img className="mike2" src={mike2} />
        </div>
        
 
        <div className={`rect4 ${inView1 ? "animate" : ""}`}></div>
        <div className="circlethree">
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200" fill="none">
        <g filter="url(#filter0_b_282_11)">
            <circle cx="100" cy="100" r="100" fill="#F5BC25" fill-opacity="0.5"/>
        </g>
        <defs>
            <filter id="filter0_b_282_11" x="-10" y="-10" width="220" height="220" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="5"/>
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_282_11"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_282_11" result="shape"/>
            </filter>
        </defs>
        </svg>
        </div>

        <div className="pagetwo2imagecontainer">
            <img className={`pagethreeimg ${inView1 ? "animate" : ""}`} src={pagethree} />   
        </div>

        <h1 className="herotext3">Embark on a creative <span>Journey</span></h1>

        <h1 className="subtext3">
             Melodium, where innovation fuels creativity. Our studio features state-of-the-art technology and infrastructure, catering to today's dynamic creative industries. Whether you're a musician recording your next chart-topper, a filmmaker scouting the perfect location, or a content creator seeking a professional space, our studio has everything you need.       
              </h1>

        <div className="rectangle42"></div>
        
        <div className="circle33">
        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="38" viewBox="0 0 37 38" fill="none">
        <g filter="url(#filter0_b_576_7)">
            <ellipse cx="18.5" cy="19" rx="18.5" ry="19" fill="#F5BC25"/>
        </g>
        <defs>
            <filter id="filter0_b_576_7" x="-10" y="-10" width="57" height="58" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="5"/>
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_576_7"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_576_7" result="shape"/>
            </filter>
        </defs>
        </svg>
        </div> 

        <div className="rectangle41"></div>

        <h1 className="miketext">LEWITT <span>LCT 4.0 PURE</span></h1>
        <div className="lewitt"></div>
         
        <h1 className="control">Control <span>Room </span></h1>
        <div className="control1"></div> 

        <div className="melodiumcontainer">
        <h1 className="melodium">MEL<span>O</span>DIUM</h1>
         </div>
        </div>
        </>


    );
}

export default Pagetwo;