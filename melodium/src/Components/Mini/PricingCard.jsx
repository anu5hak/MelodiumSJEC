import React from 'react'
import './PricingCard.css'
import priceCircle from '../../SVG/Circle.svg'

export const PricingCard = ({ title, amount, features1, features2 }) => 
{ console.log('Received props:', { title, amount, features1,features2 });
  return (
    <>
      <div className="PricingCardContainer">
      <img src={priceCircle} id='price-circle' alt="Price Circle" />
      <h1 className='price-type-h1'>{title}</h1>
      <h1 id='rupee'>₹</h1>
      <h1 className='amount'>{amount}<span>*</span></h1>
      <div className="Features">
        <h2>{features1}</h2>
        <h2 id='white-color'>{features2}</h2>
      </div>
      <svg id='bottom-right-card' xmlns="http://www.w3.org/2000/svg" width="321" height="219" viewBox="0 0 321 219" fill="none">
        <path d="M586.719 349.469C409.735 526.406 122.849 526.406 -54.104 349.469C-231.057 172.536 84.7345 274.099 316.662 180.068C848.886 -35.7761 409.735 -468.396 586.719 -291.422C763.698 -114.443 763.698 172.479 586.719 349.469Z" fill="#F5BC25"/>
      </svg> 
    </div>
  
    </>
  );
};

export default PricingCard;