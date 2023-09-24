import React from "react";
import { IKUpload,IKContext } from 'imagekitio-react';
import "./MediaStyles.css";
import DashboardMenu from "../Mini/DashboardMenu";



function Media  (){
  const API_BASE = "http://localhost:3001"
  const addVideo = async (video_id, videourl) => {
    try {
      const data = await fetch(API_BASE + '/VideoAdded', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          videoID: video_id,
          videoURL: videourl
        })
      }).then(res => res.json());
  
      console.log(data);
      if (data.message) {
        // User was added successfully
        console.log(data.message);
      } else if (data.error) {
        // User already exists or another error occurred
        console.error(data.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  const updateVideoUrl = async (id,newVideoUrl) => {
    try {
      const response = await fetch(API_BASE+'/UpdateVideoUrl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ vidid: id, newVideoUrl })
      });
  
      if (!response.ok) {
        const errorMessage = await response.text();
        console.error('Error:', errorMessage);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const handleFormSubmit = (e,Vid) => {
    e.preventDefault();
    let url = ''
    const id = Vid;
    url = e.target.elements[`video-url-${id}`].value;
    console.log('vid:', id);
    console.log('url', url);
    // addVideo(Vid,url)
    updateVideoUrl(id,url)
  };
  const handleUploadSuccess = (response) => {
    console.log('Upload successful!');
    console.log('Response:', response);
  };

  const authenticator = async ({ url }) => {
    console.log('URL:', url);
    if (!url) {
      console.error('URL is undefined.');
      return null; // Or handle appropriately based on your use case
    }
  
    const authTokenUrl = `${API_BASE}/authenticate?url=${encodeURIComponent(url)}`;
    const response = await fetch(authTokenUrl);
  
    if (!response.ok) {
      console.error('Error fetching authentication token.');
      return null; // Or handle appropriately based on your use case
    }
  
    return response.json();
  };

  return (
    <>
    <div className="audio">
    <DashboardMenu/>
        {/* <img className="line" alt="Line" src="line-2.svg" /> */}
        <h1 className="text-wrapper">Media</h1>
        <div className="media-line"/>
        <div className="text-wrapper-1">Video</div>
        <div className="text-wrapper-2">Pictures</div>
        <form onSubmit={(e) => handleFormSubmit(e, 1)}>
          <input type="text" className="text-wrapper-10" name="video-url-1" placeholder="Enter video ID 1"/>
          <input type="submit" value="Confirm"  className="confirm-video-1"/>
        </form>
        <form onSubmit={(e) => handleFormSubmit(e, 2)}>
          <input type="text" className="text-wrapper-11" name="video-url-2" placeholder="Enter video ID 2"/>
          <input type="submit" value="Confirm"  className="confirm-video-2"/>
        </form>
        <input type="text" className="text-wrapper-12" placeholder="Enter Image ID(1-7)"/>
        <input type="text" className="text-wrapper-13" placeholder="Enter Image Link"/>
        <input type="button" value="Confirm"  className="confirm-video-3"/>
        {/* <IKContext
          publicKey="public_JJMUvpoCfDmNK3sJvg2rF2sdup0="
          urlEndpoint="https://ik.imagekit.io/Melroy"
          transformationPosition="path"
          authenticator={authenticator}
        >
          <IKUpload
            fileName="my-upload"
            onSuccess={(response) => {
              console.log('Inside IKUpload onSuccess callback');
              handleUploadSuccess(response);
            }}
            onError={(error) => {
              console.error('IKUpload Error:', error);
            }}
          />
        </IKContext> */}
        <input type="image" src="" alt="" />
    </div>
    </>
  );
};
export default Media;

