import React from 'react'
import "./style.css";
import Button from '../../../mock/SpecialCard/Button';

const AboutContent = () => {
  return (
    <div className='about-content'>
      <h2>About Us</h2>
      <h3>Welcome to the world of Pradeep Dhaka's Signature Peanut Butter — where taste meets health</h3>
      <p>
      Using 100% natural, vegan, and protein-rich ingredients. From classic creamy and crunchy to bold flavors like chocolate swirl, honey roasted, and spicy sriracha, our peanut butter is free from preservatives and perfect for fueling your day.
Enjoy the convenience of fast and reliable home delivery, bringing your favorite peanut butter straight to your door. Taste the difference and feel the energy!
      </p>
      <Button btn="Read more"/>
    </div>
  )
}

export default AboutContent;