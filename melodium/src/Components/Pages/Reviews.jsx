import React from 'react'
import './Reviews.css'
import DashboardMenu from '../Mini/DashboardMenu'
const API_BASE = 'http://localhost:3001'

function Reviews() {

  const addReview = async (review_id, name, rating, review) => {
    try {
      const data = await fetch(API_BASE + '/ReviewAdded', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          revID: review_id,
          Name: name,
          Rate: rating,
          Rev: review
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
  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Access the form elements by name
    const id = e.target.elements['review-id-input'].value;
    const name = e.target.elements['review-name-input'].value;
    const rating = e.target.elements['review-rating-input'].value;
    const review = e.target.elements['review-input'].value;

    console.log('id:', id);
    console.log('name:', name);
    console.log('Rating:', rating);
    console.log('Review:', review);
    addReview(id, name, rating, review)
  };

  return (
    <>
        <div className="ReviewContainer">
            <DashboardMenu/>
            <h1 className='review-title'>Reviews</h1>
            <div className="review-line"/>
            <form onSubmit={handleFormSubmit}>
              <div className="review-input-fields">
              <label htmlFor="review-id-input" id='review-id-input-label'>Review ID:</label>
                <input type="number" id='review-id-input' name='review-id-input' placeholder='Enter review number'/>
              <label htmlFor="review-name-input" id='review-name-input-label'>Name:</label>
                <input type="text"  id='review-name-input' name='review-name-input' placeholder='Enter name'/>
              <label htmlFor="review-rating-input" id="review-rating-input-label">Rating(out of 5):</label>
                <input type="text"  id='review-rating-input' name='review-rating-input' placeholder='Enter rating'/>
              <label htmlFor="review-input" id='review-input-label'>Review:</label>
                <textarea  id='review-input' name='review-input' placeholder='Enter review'/> 
            </div>
            <input type="submit" value="Submit" id='review-submit-button'/>
            </form>
        </div>
    </>
  )
}

export default Reviews