import React from 'react'
import "./style.css";
import Button from '../../mock/SpecialCard/Button';
import IMAGE_SRC1 from "../../assest/Knot.png";

const FlatComponent = () => {
  return (
    <div className='flat-content'>
        <img src={IMAGE_SRC1} alt="img" />
      <div className="content">
      <h2>Savor the rich taste of our Peanut Butter this weekend</h2>
      <p>FLAT 10% OFF on all peanut products</p>
        <Button btn="Read more"/>
      </div>
        <img src={IMAGE_SRC1} alt="img" />
    </div>
  )
}

export default FlatComponent;