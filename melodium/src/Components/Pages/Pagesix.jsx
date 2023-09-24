import React, { useEffect, useState } from "react";
import "./Pagesix.css"
import ServiceCard from '../Mini/ServiceCard'

import ser1 from './Images/ser1.png'
import ser2 from './Images/ser2.png'
import ser3 from './Images/ser3.png'
import ser4 from './Images/ser4.png'
import ser5 from './Images/ser5.png'
import ser6 from './Images/ser6.png'

function Pagesix(){
    return(
        <>
            <div className="pagesixcontainer">
                <div className="circleser">
                    <svg xmlns="http://www.w3.org/2000/svg" width="117" height="131" viewBox="0 0 117 131" fill="none">
                        <g filter="url(#filter0_b_312_103)">
                            <ellipse cx="105" cy="22" rx="105" ry="109" fill="#F5BC25" fill-opacity="0.5"/>
                        </g>
                        <defs>
                            <filter id="filter0_b_312_103" x="-10" y="-97" width="230" height="238" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="5"/>
                            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_312_103"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_312_103" result="shape"/>
                            </filter>
                        </defs>
                    </svg>
                </div>

                <div className="herotextser">
                    <h1 >Want to know more about our service rates?  Click <span>'Know More'</span></h1>
                </div>
                <div className="subser">
                    <h1>S E R V I C E S</h1>
                </div>
                <div className="serimages">
                    <ServiceCard imgsource={ser1} title="Music Production" />
                    <ServiceCard imgsource={ser2} title="Audio Recording" />
                    <ServiceCard imgsource={ser3} title="Session Artist" />
                    <ServiceCard imgsource={ser4} title="Photo & Video" />
                    <ServiceCard imgsource={ser5} title="Mixing & Mastering" />
                    <ServiceCard imgsource={ser6} title="Jam Room" />
               </div>

               <div className="servicecircle">
               <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                    <g filter="url(#filter0_b_767_6)">
                        <circle cx="22.5" cy="22.5" r="22.5" transform="rotate(-90 22.5 22.5)" fill="#F5BC25"/>
                    </g>
                    <defs>
                    <filter id="filter0_b_767_6" x="-10" y="-10" width="65" height="65" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="5"/>
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_767_6"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_767_6" result="shape"/>
                    </filter>
                    </defs>
                    </svg>
               </div>
               <div className="service1rect"></div>
               <div className="service2rect"></div>
            </div>
        </>
    );
}
export default Pagesix;