import React from 'react'
import "./style.css";
import Button from '../../../mock/SpecialCard/Button';

const Content = () => {
  return (
    <div className='landing-content'>
      <h1>Welcome To Golden View Dine</h1>
      <p>Explore the authentic vegan dishes with your friends and family</p>
      <Button btn="Read more"/>
    </div>
  )
}

export default Content;