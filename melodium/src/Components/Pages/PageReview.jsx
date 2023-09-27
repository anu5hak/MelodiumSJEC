import React,{useEffect, useState} from "react";
import "./PageReview.css"
import review1 from "../Pages/Images/review1.png"
function PageReview(){
    const API_BASE = 'http://localhost:3001';
const [Review, setReview] = useState([]);
const [reviewTest,setReviewTest] = useState("");

const getReviews = () => {
  let apiendpoint = API_BASE + '/getReviews';
  fetch(apiendpoint)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (Array.isArray(data)) {
        setReview(data);
        console.log("Review1:",Review[0].PersonName);
        setReviewTest(Review[0].PersonName)
    } else {
        setReview([]);
        console.log("Not an array");
    }
    })
    .catch((err) => console.error("Error: ", err));
};

    useEffect(() => {
    getReviews();
    }, []);
    return(
        <>
        <div className="pagereviewcontainer">
            <h1 className="testi">Testimonials</h1>


            <div className="reviewcardcontainer">
            <div class="scroll-area">
                <div class="scroll">
                    <div class="inner-scroll">
                        <div class="block-container">
                        <div className="block">
                            {Review[0] ? (
                                <div className="reviewrectangle1">
                                <h1 className="namereview">{Review[4].PersonName}</h1>
                                <h1 className="ratereview">{Review[4].Rating}⭐</h1>
                                </div>
                            ) : null}
                            {Review[0] ? (
                                <h1 className="review1">”{Review[4].Review}”</h1>
                            ) : null}
                            </div>

                        <div className="block">
                            {Review[0] ? (
                                <div className="reviewrectangle1">
                                <h1 className="namereview">{Review[3].PersonName}</h1>
                                <h1 className="ratereview">{Review[3].Rating}⭐</h1>
                                </div>
                            ) : null}
                            {Review[0] ? (
                                <h1 className="review1">”{Review[3].Review}”</h1>
                            ) : null}
                            </div>

                        <div className="block">
                            {Review[0] ? (
                                <div className="reviewrectangle1">
                                <h1 className="namereview">{Review[2].PersonName}</h1>
                                <h1 className="ratereview">{Review[2].Rating}⭐</h1>
                                </div>
                            ) : null}
                            {Review[0] ? (
                                <h1 className="review1">”{Review[2].Review}”</h1>
                            ) : null}
                            </div>

                            <div className="block">
                            {Review[0] ? (
                                <div className="reviewrectangle1">
                                <h1 className="namereview">{Review[1].PersonName}</h1>
                                <h1 className="ratereview">{Review[1].Rating}⭐</h1>
                                </div>
                            ) : null}
                            {Review[0] ? (
                                <h1 className="review1">”{Review[1].Review}”</h1>
                            ) : null}
                            </div>

                            <div className="block">
                            {Review[0] ? (
                                <div className="reviewrectangle1">
                                <h1 className="namereview">{Review[0].PersonName}</h1>
                                <h1 className="ratereview">{Review[0].Rating}⭐</h1>
                                </div>
                            ) : null}
                            {Review[0] ? (
                                <h1 className="review1">”{Review[0].Review}”</h1>
                            ) : null}
                            </div>


                            {/* <div class="block">
                            <div className="reviewrectangle1">
                            <h1 className="namereview">{Review[0].PersonName}</h1>
                            <h1 className="ratereview">{Review[0].Rating}⭐</h1>
                            </div>
                                {/* <div className="imgreview1">
                                        <img className="ir1" src={review1}></img>
                                </div> */}
                                {/* <h1 className="review1">"{Review[0].Review}”</h1>
                            </div> */} 
                        </div>
                    </div>
                </div>
            </div>



            </div>
        </div>

        
        </>
        );
    }
export default PageReview;