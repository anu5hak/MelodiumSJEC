import React, { useEffect, useState } from "react";
import "./Gallery.css";
import YouTube from "react-youtube";

import gall1 from "./Images/gall1.jpeg";
import gall3 from "./Images/gall3.jpeg";
import gall4 from "./Images/gall4.jpeg";
import gall5 from "./Images/gall5.jpeg";
import gall6 from "./Images/gall6.jpeg";
import gall7 from "./Images/gall7.jpeg";
import gall8 from "./Images/gall8.jpeg";

function Gallery() {
  const [inView1, setInView1] = useState(false);
  const [imagesOrder, setImagesOrder] = useState([1, 2, 3, 4, 5, 6, 7]);

  useEffect(() => {
    const handleScroll = () => {
      const g1 = document.querySelector(".gallhero").getBoundingClientRect();

      if (!inView1 && g1.top <= window.innerHeight && g1.bottom >= 0) {
        setInView1(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [inView1]);

  const videoId = "9Ch42P9EKgI";

  const handleClick = (clickedImage) => {
    // Find the index of the clicked image in the current order
    const clickedIndex = imagesOrder.indexOf(clickedImage);

    // Reorder the images based on the clicked index
    const reorderedImages = [
      ...imagesOrder.slice(clickedIndex),
      ...imagesOrder.slice(0, clickedIndex),
    ];

    // Update the state with the new image order
    setImagesOrder(reorderedImages);
  };
  const [videoUrl2, setVideoUrl2] = useState(null);

  useEffect(() => {
    // Make a GET request to your server to retrieve the YouTube video URL for video 2
    fetch('http://localhost:3001/GetVideo/2')
      .then(response => response.json())
      .then(data => {
        if (data.videoURL) {
          setVideoUrl2(data.videoURL);
        } else {
          console.error('No video URL found for video 2.');
        }
      })
      .catch(error => console.error('Error fetching video 2 URL:', error));
  }, []);

  return (
    <>
      <div className="gallerycontainer">
        <div className="gallery1rect"></div>
        <div className="gallery2rect"></div>
        <div className="circlegallery">
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
            <g filter="url(#filter0_b_715_26)">
              <circle cx="30" cy="30" r="30" fill="url(#paint0_linear_715_26)"/>
            </g>
            <defs>
              <filter id="filter0_b_715_26" x="-10" y="-10" width="80" height="80" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="5"/>
                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_715_26"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_715_26" result="shape"/>
              </filter>
              <linearGradient id="paint0_linear_715_26" x1="95.5" y1="-28" x2="-43.5" y2="123.5" gradientUnits="userSpaceOnUse">
                <stop stop-color="#F5BC25"/>
                <stop offset="0.585871" stop-color="#F5BC25" stop-opacity="0"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <YouTube className="melvideo" videoId={videoUrl2} />
        <div className="galleryherotext">
          <h1 className={`gallhero ${inView1 ? "animate" : ""}`}>
            <span>G</span>
            <span>A</span>
            <span>L</span>
            <span>L</span>
            <span>E</span>
            <span>R</span>
            <span>Y</span>
          </h1>
        </div>
        <div className="carousel">
          {imagesOrder.map((image, index) => (
            <img
              key={index}
              src={getGallImage(image)}
              alt={`Gallery ${image}`}
              className={`gall${index + 1}`}
              onClick={() => handleClick(image)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

function getGallImage(imageNumber) {
  switch (imageNumber) {
    case 1:
      return gall5;
    case 2:
      return gall8;
    case 3:
      return gall4;
    case 4:
      return gall6;
    case 5:
      return gall1;
    case 6:
      return gall7;
    case 7:
      return gall3;
    default:
      return "";
  }
}

export default Gallery;
