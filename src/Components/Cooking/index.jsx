import React from 'react'
import "./style.css";
import Button from '../../mock/SpecialCard/Button';

const CookingComponent = () => {
  return (
    <div className='cooking-content'>
      <h2>Peanut Butter Process</h2>
<h3>What Goes In</h3>
<p>
  Pradeep Dhaka, a passionate food innovator from India, is best known for crafting high-quality, 
  natural peanut butter that's both nutritious and delicious. Made from 100% roasted peanuts, his peanut 
  butter contains no added sugar, no preservatives, and is packed with protein, making it a perfect fit 
  for fitness enthusiasts and food lovers alike. With a commitment to purity and taste, Pradeep’s 
  creation has become a staple in many kitchens, ideal for smoothies, sandwiches, or just straight from 
  the jar. His dedication to clean ingredients and exceptional flavor has made his peanut butter a 
  standout in the health food market.
</p>

      <Button btn="Read more"/>
    </div>
  )
}

export default CookingComponent;