import React,{useState} from 'react'
import './Pricing.css'
import paper from '../../Images/PricingTop.png'
import PricingCard from '../Mini/PricingCard'


const categories = {
  musicProduction: [
    {
      title: 'Basic',
      amount: '30000',
      feature1: 'Less than 15 tracks', 
      feature2: 'Lorem Ipsum dolor sit amet'
    },
    {
      title: 'Advanced',
      amount: '40000',
      feature1: 'Less than 15 tracks', 
      feature2: 'Lorem Ipsum dolor sit amet'
    },
    {
      title: 'Advanced',
      amount: '30000',
      feature1: 'Less than 15 tracks', 
      feature2: 'Lorem Ipsum dolor sit amet'
    },
    {
      title: 'Advanced',
      amount: '30000',
      feature1: 'Less than 15 tracks', 
      feature2: 'Lorem Ipsum dolor sit amet'
    },
    {
      title: 'Advanced',
      amount: '30000',
      feature1: 'Less than 15 tracks', 
      feature2: 'Lorem Ipsum dolor sit amet'
    },
  ],
  sessionArtist: [
    {
      title: 'Basic',
      amount: '20000',
      features: ['Basic feature 1', 'Basic feature 2'],
    }
  ],

};

function Pricing() {
  const [category, setCategory] = useState('musicProduction'); // Default category

  // const handleCategoryChange = (newCategory) => {
  //   setCategory(newCategory);
  // };
  return (
    <>
        <div className="PricingPageContainer">
              <img className='paper-background' src={paper} alt="" />
              <h1 className='PricingTitle'>Mixing and Mastering</h1>
              <div className="pricing-left-rectangle"/>
              <div className="CardContainer">
          {categories[category].map((pricingOption, index) => (
            <PricingCard
              key={index}
              title={pricingOption.title}
              amount={pricingOption.amount}
              features1={pricingOption.feature1}
              features2={pricingOption.feature2}
            />
          ))}
          <h1 id="disclaimer">
            *Prices mentioned above are a rough estimate and are subject to change
          </h1>
        </div>
        </div>
    </>
  )
}

export default Pricing