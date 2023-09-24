import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import { IKImage, IKContext,IKUpload } from 'imagekitio-react';

function MediaTest() {
  const [videoUrl, setVideoUrl] = useState(null);
  const [videoUrl2, setVideoUrl2] = useState(null);

  useEffect(() => {
    // Make a GET request to your server to retrieve the YouTube video URL for video 1
    fetch('http://localhost:3001/GetVideo/1')
      .then(response => response.json())
      .then(data => {
        if (data.videoURL) {
          setVideoUrl(data.videoURL);
          console.log("Video:"+videoUrl)
        } else {
          console.error('No video URL found for video 1.');
        }
      })
      .catch(error => console.error('Error fetching video 1 URL:', error));
  }, []);

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
      {/* <YouTube videoId={videoUrl} />
      <YouTube videoId={videoUrl2} /> */}
      <img src="https://ik.imagekit.io/Melroy/MelPassport_eiYQnrGU7.jpg?updatedAt=1695293648007" alt="" />
    </>
  );
}

export default MediaTest;
