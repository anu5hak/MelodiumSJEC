import React from "react";
import "./PageReview.css"
import review1 from "../Pages/Images/review1.png"

function PageReview(){
    return(
        <>
        <div className="pagereviewcontainer">
            <h1 className="testi">Testimonials</h1>


            <div className="reviewcardcontainer">
            <div class="scroll-area">
                <div class="scroll">
                    <div class="inner-scroll">
                        <div class="block-container">
                            <div class="block">
                                <div className="reviewrectangle1">
                                    <h1 className="namereview">Roger Loren</h1>
                                    <h1 className="ratereview">5⭐</h1>
                                </div>
                                <h1 className="review1">"This studio is a blessing for Mangalorean musicians. It's well-equipped and has excellent acoustics for all kinds of recording and mixing work. A notable feature is the super spacious live-room, which is the biggest I've seen in Mangalore. Another notable mention is their highly knowledgeable, musically-skilled and professional in-house engineer, Melroy Furtado.
I had a great experience and would definitely recommend this place."</h1>
                            </div>
                            
                            <div class="block">
                                <div className="reviewrectangle1">
                                    <h1 className="namereview">Thea Mathias</h1>
                                    <h1 className="ratereview">5⭐</h1>
                                </div>
                                <h1 className="review1">"Amazing studio. Probably the best in mangalore. Good equipment. soundproofing is great. They're definitely the best in town. Had an Amazing recording session here"</h1>
                            </div>


                            <div class="block">
                            <div className="reviewrectangle1">
                            <h1 className="namereview">Dr Niranjan Samani</h1>
                            <h1 className="ratereview">5⭐</h1>
                            </div>
                                <h1 className="review1">"Loved the Experience, A must visit place if you are looking for a Perfect Stress free and Best Recording studio.Melroy was really very welcoming and was sharing his input through out making the output of our recording more than perfect.
I would recommend this place to everyone and i myself will be his recurring client for sure"</h1>
                            </div>


                            <div class="block">
                            <div className="reviewrectangle1">
                            <h1 className="namereview">Navya Sk</h1>
                            <h1 className="ratereview">5⭐</h1>
                            </div>
                                <h1 className="review1">"The most spacious and well organised studio I've been so far.The sound engineer melroy was really professional and was giving us a lot of inputs which is a great great quality.Overall had a great experience"</h1>
                            </div>



                            <div class="block">
                            <div className="reviewrectangle1">
                            <h1 className="namereview">Roopa D Shetty</h1>
                            <h1 className="ratereview">5⭐</h1>
                            </div>
                                <h1 className="review1">"It was really a great experience working with Mr Melroy,  one of the best studio, spacious, good atmosphere highly recommended overall a great input."</h1>
                            </div>
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